import Tibia84PvpEnforcedSeasonKeywordPage, { generateMetadata } from './tibia-8-4-pvp-enforced-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84PvpEnforcedSeasonKeywordPage />;
}
