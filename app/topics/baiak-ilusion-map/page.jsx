import BaiakIlusionMapKeywordPage, { generateMetadata } from './baiak-ilusion-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionMapKeywordPage />;
}
