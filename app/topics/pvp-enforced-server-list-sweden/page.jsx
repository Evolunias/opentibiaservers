import PvpEnforcedServerListSwedenKeywordPage, { generateMetadata } from './pvp-enforced-server-list-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedServerListSwedenKeywordPage />;
}
