import Tibia11PvpEnforcedServerListKeywordPage, { generateMetadata } from './tibia-11-pvp-enforced-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpEnforcedServerListKeywordPage />;
}
