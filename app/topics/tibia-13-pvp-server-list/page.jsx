import Tibia13PvpServerListKeywordPage, { generateMetadata } from './tibia-13-pvp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpServerListKeywordPage />;
}
