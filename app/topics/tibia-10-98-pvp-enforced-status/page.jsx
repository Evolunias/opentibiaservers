import Tibia1098PvpEnforcedStatusKeywordPage, { generateMetadata } from './tibia-10-98-pvp-enforced-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098PvpEnforcedStatusKeywordPage />;
}
