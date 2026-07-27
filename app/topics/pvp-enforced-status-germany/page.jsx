import PvpEnforcedStatusGermanyKeywordPage, { generateMetadata } from './pvp-enforced-status-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedStatusGermanyKeywordPage />;
}
