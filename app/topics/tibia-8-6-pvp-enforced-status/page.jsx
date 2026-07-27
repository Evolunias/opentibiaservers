import Tibia86PvpEnforcedStatusKeywordPage, { generateMetadata } from './tibia-8-6-pvp-enforced-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86PvpEnforcedStatusKeywordPage />;
}
