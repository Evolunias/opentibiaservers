import Tibia13PvpEnforcedSeasonKeywordPage, { generateMetadata } from './tibia-13-pvp-enforced-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpEnforcedSeasonKeywordPage />;
}
