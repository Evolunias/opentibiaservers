import BaiakIlusionReviewsKeywordPage, { generateMetadata } from './baiak-ilusion-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionReviewsKeywordPage />;
}
