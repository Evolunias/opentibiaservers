import TibianusMarketKeywordPage, { generateMetadata } from './tibianus-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusMarketKeywordPage />;
}
