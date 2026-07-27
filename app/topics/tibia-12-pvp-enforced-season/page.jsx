import Tibia12PvpEnforcedSeasonKeywordPage, { generateMetadata } from './tibia-12-pvp-enforced-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpEnforcedSeasonKeywordPage />;
}
