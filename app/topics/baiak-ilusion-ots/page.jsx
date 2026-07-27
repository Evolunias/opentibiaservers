import BaiakIlusionOtsKeywordPage, { generateMetadata } from './baiak-ilusion-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionOtsKeywordPage />;
}
