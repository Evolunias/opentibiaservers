import BaiakIlusionShopKeywordPage, { generateMetadata } from './baiak-ilusion-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionShopKeywordPage />;
}
