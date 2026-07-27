import Tibia76PvpEnforcedServerListKeywordPage, { generateMetadata } from './tibia-7-6-pvp-enforced-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76PvpEnforcedServerListKeywordPage />;
}
