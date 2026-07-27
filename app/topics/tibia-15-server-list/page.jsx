import Tibia15ServerListKeywordPage, { generateMetadata } from './tibia-15-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15ServerListKeywordPage />;
}
