import CustomMapReviewBrazilKeywordPage, { generateMetadata } from './custom-map-review-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapReviewBrazilKeywordPage />;
}
