import RealMapReviewCanadaKeywordPage, { generateMetadata } from './real-map-review-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapReviewCanadaKeywordPage />;
}
