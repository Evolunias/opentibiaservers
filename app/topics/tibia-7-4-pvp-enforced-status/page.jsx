import Tibia74PvpEnforcedStatusKeywordPage, { generateMetadata } from './tibia-7-4-pvp-enforced-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74PvpEnforcedStatusKeywordPage />;
}
