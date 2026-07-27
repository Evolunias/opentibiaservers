import Tibia100PvpServerListKeywordPage, { generateMetadata } from './tibia-10-0-pvp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100PvpServerListKeywordPage />;
}
