import BaiakBaiakIlusionServerKeywordPage, { generateMetadata } from './baiak-baiak-ilusion-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakBaiakIlusionServerKeywordPage />;
}
