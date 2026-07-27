import RealestaMarketKeywordPage, { generateMetadata } from './realesta-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaMarketKeywordPage />;
}
