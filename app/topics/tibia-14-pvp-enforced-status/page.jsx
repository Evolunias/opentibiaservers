import Tibia14PvpEnforcedStatusKeywordPage, { generateMetadata } from './tibia-14-pvp-enforced-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpEnforcedStatusKeywordPage />;
}
