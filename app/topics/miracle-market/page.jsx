import MiracleMarketKeywordPage, { generateMetadata } from './miracle-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleMarketKeywordPage />;
}
