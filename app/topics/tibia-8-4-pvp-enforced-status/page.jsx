import Tibia84PvpEnforcedStatusKeywordPage, { generateMetadata } from './tibia-8-4-pvp-enforced-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84PvpEnforcedStatusKeywordPage />;
}
