import EvoleraMarketKeywordPage, { generateMetadata } from './evolera-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraMarketKeywordPage />;
}
