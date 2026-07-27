import Tibia14PvpEnforcedSeasonKeywordPage, { generateMetadata } from './tibia-14-pvp-enforced-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpEnforcedSeasonKeywordPage />;
}
