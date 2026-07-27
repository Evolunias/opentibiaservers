import PvpEnforcedStatusSwedenKeywordPage, { generateMetadata } from './pvp-enforced-status-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedStatusSwedenKeywordPage />;
}
