import Tibia1098PvpEnforcedServerListKeywordPage, { generateMetadata } from './tibia-10-98-pvp-enforced-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098PvpEnforcedServerListKeywordPage />;
}
