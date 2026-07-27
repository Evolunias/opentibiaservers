import Tibia76PvpEnforcedStatusKeywordPage, { generateMetadata } from './tibia-7-6-pvp-enforced-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76PvpEnforcedStatusKeywordPage />;
}
