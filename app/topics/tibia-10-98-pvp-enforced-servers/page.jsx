import Tibia1098PvpEnforcedServersKeywordPage, { generateMetadata } from './tibia-10-98-pvp-enforced-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098PvpEnforcedServersKeywordPage />;
}
