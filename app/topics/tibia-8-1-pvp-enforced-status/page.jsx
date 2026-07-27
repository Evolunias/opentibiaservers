import Tibia81PvpEnforcedStatusKeywordPage, { generateMetadata } from './tibia-8-1-pvp-enforced-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81PvpEnforcedStatusKeywordPage />;
}
