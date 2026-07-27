import Tibia11PvpEnforcedStatusKeywordPage, { generateMetadata } from './tibia-11-pvp-enforced-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpEnforcedStatusKeywordPage />;
}
