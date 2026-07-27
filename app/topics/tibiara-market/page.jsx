import TibiaraMarketKeywordPage, { generateMetadata } from './tibiara-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraMarketKeywordPage />;
}
