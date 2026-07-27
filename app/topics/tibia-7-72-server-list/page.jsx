import Tibia772ServerListKeywordPage, { generateMetadata } from './tibia-7-72-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772ServerListKeywordPage />;
}
