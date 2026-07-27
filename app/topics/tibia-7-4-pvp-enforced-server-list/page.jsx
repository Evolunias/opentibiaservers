import Tibia74PvpEnforcedServerListKeywordPage, { generateMetadata } from './tibia-7-4-pvp-enforced-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74PvpEnforcedServerListKeywordPage />;
}
