import OtServersRankingsKeywordPage, { generateMetadata } from './ot-servers-rankings';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServersRankingsKeywordPage />;
}
