import RealMapReviewGermanyKeywordPage, { generateMetadata } from './real-map-review-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapReviewGermanyKeywordPage />;
}
