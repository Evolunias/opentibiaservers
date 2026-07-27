import TibijkaMarketKeywordPage, { generateMetadata } from './tibijka-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaMarketKeywordPage />;
}
