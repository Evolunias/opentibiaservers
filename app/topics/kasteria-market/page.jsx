import KasteriaMarketKeywordPage, { generateMetadata } from './kasteria-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaMarketKeywordPage />;
}
