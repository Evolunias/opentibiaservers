import CustomMapReviewUkKeywordPage, { generateMetadata } from './custom-map-review-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapReviewUkKeywordPage />;
}
