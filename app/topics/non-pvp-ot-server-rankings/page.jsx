import NonPvpOtServerRankingsKeywordPage, { generateMetadata } from './non-pvp-ot-server-rankings';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpOtServerRankingsKeywordPage />;
}
