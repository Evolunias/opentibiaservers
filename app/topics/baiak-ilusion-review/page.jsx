import BaiakIlusionReviewKeywordPage, { generateMetadata } from './baiak-ilusion-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionReviewKeywordPage />;
}
