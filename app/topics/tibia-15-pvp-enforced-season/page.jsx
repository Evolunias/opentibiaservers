import Tibia15PvpEnforcedSeasonKeywordPage, { generateMetadata } from './tibia-15-pvp-enforced-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpEnforcedSeasonKeywordPage />;
}
