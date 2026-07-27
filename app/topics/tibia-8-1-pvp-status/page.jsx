import Tibia81PvpStatusKeywordPage, { generateMetadata } from './tibia-8-1-pvp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81PvpStatusKeywordPage />;
}
