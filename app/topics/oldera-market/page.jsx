import OlderaMarketKeywordPage, { generateMetadata } from './oldera-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaMarketKeywordPage />;
}
