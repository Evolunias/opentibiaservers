import BaiakReviewNorthAmericaKeywordPage, { generateMetadata } from './baiak-review-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakReviewNorthAmericaKeywordPage />;
}
