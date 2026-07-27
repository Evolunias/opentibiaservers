import RealMapReviewUkKeywordPage, { generateMetadata } from './real-map-review-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapReviewUkKeywordPage />;
}
