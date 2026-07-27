import Tibia12PvpServerListKeywordPage, { generateMetadata } from './tibia-12-pvp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpServerListKeywordPage />;
}
