import Tibia12PvpEnforcedStatusKeywordPage, { generateMetadata } from './tibia-12-pvp-enforced-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpEnforcedStatusKeywordPage />;
}
