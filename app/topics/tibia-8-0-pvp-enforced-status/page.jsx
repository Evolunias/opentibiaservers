import Tibia80PvpEnforcedStatusKeywordPage, { generateMetadata } from './tibia-8-0-pvp-enforced-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80PvpEnforcedStatusKeywordPage />;
}
