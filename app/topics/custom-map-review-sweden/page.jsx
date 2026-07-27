import CustomMapReviewSwedenKeywordPage, { generateMetadata } from './custom-map-review-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapReviewSwedenKeywordPage />;
}
