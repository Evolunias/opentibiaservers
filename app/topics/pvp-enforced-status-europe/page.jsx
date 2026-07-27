import PvpEnforcedStatusEuropeKeywordPage, { generateMetadata } from './pvp-enforced-status-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedStatusEuropeKeywordPage />;
}
