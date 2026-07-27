import Tibia13PvpEnforcedStatusKeywordPage, { generateMetadata } from './tibia-13-pvp-enforced-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpEnforcedStatusKeywordPage />;
}
