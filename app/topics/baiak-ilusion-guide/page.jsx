import BaiakIlusionGuideKeywordPage, { generateMetadata } from './baiak-ilusion-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionGuideKeywordPage />;
}
