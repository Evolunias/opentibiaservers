import PvpEnforcedOtServerRankingsKeywordPage, { generateMetadata } from './pvp-enforced-ot-server-rankings';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedOtServerRankingsKeywordPage />;
}
