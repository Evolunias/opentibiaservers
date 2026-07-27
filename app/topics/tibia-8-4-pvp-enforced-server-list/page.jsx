import Tibia84PvpEnforcedServerListKeywordPage, { generateMetadata } from './tibia-8-4-pvp-enforced-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84PvpEnforcedServerListKeywordPage />;
}
