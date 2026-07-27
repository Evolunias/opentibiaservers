import BaiakIlusionRealMapKeywordPage, { generateMetadata } from './baiak-ilusion-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionRealMapKeywordPage />;
}
