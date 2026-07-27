import BaiakIlusionMarketKeywordPage, { generateMetadata } from './baiak-ilusion-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionMarketKeywordPage />;
}
