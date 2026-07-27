import RealeraMarketKeywordPage, { generateMetadata } from './realera-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraMarketKeywordPage />;
}
