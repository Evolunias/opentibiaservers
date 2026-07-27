import Tibia86PvpEnforcedSeasonKeywordPage, { generateMetadata } from './tibia-8-6-pvp-enforced-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86PvpEnforcedSeasonKeywordPage />;
}
