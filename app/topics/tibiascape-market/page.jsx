import TibiascapeMarketKeywordPage, { generateMetadata } from './tibiascape-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeMarketKeywordPage />;
}
