import BaiakIlusionVipKeywordPage, { generateMetadata } from './baiak-ilusion-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionVipKeywordPage />;
}
