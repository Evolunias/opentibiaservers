import Tibia74PvpEnforcedSeasonKeywordPage, { generateMetadata } from './tibia-7-4-pvp-enforced-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74PvpEnforcedSeasonKeywordPage />;
}
