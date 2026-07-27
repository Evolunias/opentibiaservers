import Tibia80PvpEnforcedServersKeywordPage, { generateMetadata } from './tibia-8-0-pvp-enforced-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80PvpEnforcedServersKeywordPage />;
}
