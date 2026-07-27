import Tibia11PvpEnforcedSeasonKeywordPage, { generateMetadata } from './tibia-11-pvp-enforced-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpEnforcedSeasonKeywordPage />;
}
