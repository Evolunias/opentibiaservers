import Tibia81PvpServerListKeywordPage, { generateMetadata } from './tibia-8-1-pvp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81PvpServerListKeywordPage />;
}
