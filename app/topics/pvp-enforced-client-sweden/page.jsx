import PvpEnforcedClientSwedenKeywordPage, { generateMetadata } from './pvp-enforced-client-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedClientSwedenKeywordPage />;
}
