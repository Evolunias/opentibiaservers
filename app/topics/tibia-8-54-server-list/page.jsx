import Tibia854ServerListKeywordPage, { generateMetadata } from './tibia-8-54-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854ServerListKeywordPage />;
}
