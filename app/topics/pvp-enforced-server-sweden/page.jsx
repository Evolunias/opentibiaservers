import PvpEnforcedServerSwedenKeywordPage, { generateMetadata } from './pvp-enforced-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedServerSwedenKeywordPage />;
}
