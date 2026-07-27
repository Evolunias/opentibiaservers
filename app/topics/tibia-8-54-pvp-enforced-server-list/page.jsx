import Tibia854PvpEnforcedServerListKeywordPage, { generateMetadata } from './tibia-8-54-pvp-enforced-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854PvpEnforcedServerListKeywordPage />;
}
