import Tibia81PvpEnforcedSeasonKeywordPage, { generateMetadata } from './tibia-8-1-pvp-enforced-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81PvpEnforcedSeasonKeywordPage />;
}
