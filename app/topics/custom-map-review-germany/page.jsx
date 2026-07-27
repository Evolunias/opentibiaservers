import CustomMapReviewGermanyKeywordPage, { generateMetadata } from './custom-map-review-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapReviewGermanyKeywordPage />;
}
