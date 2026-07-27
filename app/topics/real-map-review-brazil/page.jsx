import RealMapReviewBrazilKeywordPage, { generateMetadata } from './real-map-review-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapReviewBrazilKeywordPage />;
}
