import Tibia76ServerListKeywordPage, { generateMetadata } from './tibia-7-6-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76ServerListKeywordPage />;
}
