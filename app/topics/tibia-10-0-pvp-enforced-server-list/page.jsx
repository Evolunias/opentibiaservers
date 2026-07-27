import Tibia100PvpEnforcedServerListKeywordPage, { generateMetadata } from './tibia-10-0-pvp-enforced-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100PvpEnforcedServerListKeywordPage />;
}
