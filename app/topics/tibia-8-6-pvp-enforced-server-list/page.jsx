import Tibia86PvpEnforcedServerListKeywordPage, { generateMetadata } from './tibia-8-6-pvp-enforced-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86PvpEnforcedServerListKeywordPage />;
}
