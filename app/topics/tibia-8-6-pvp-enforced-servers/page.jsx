import Tibia86PvpEnforcedServersKeywordPage, { generateMetadata } from './tibia-8-6-pvp-enforced-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86PvpEnforcedServersKeywordPage />;
}
