import Tibia71PvpEnforcedStatusKeywordPage, { generateMetadata } from './tibia-7-1-pvp-enforced-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71PvpEnforcedStatusKeywordPage />;
}
