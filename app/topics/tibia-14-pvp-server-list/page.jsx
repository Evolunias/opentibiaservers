import Tibia14PvpServerListKeywordPage, { generateMetadata } from './tibia-14-pvp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpServerListKeywordPage />;
}
