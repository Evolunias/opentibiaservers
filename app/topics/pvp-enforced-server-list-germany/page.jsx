import PvpEnforcedServerListGermanyKeywordPage, { generateMetadata } from './pvp-enforced-server-list-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedServerListGermanyKeywordPage />;
}
