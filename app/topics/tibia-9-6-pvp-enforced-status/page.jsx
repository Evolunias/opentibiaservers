import Tibia96PvpEnforcedStatusKeywordPage, { generateMetadata } from './tibia-9-6-pvp-enforced-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96PvpEnforcedStatusKeywordPage />;
}
