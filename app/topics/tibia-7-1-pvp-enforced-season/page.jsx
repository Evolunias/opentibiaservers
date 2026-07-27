import Tibia71PvpEnforcedSeasonKeywordPage, { generateMetadata } from './tibia-7-1-pvp-enforced-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71PvpEnforcedSeasonKeywordPage />;
}
