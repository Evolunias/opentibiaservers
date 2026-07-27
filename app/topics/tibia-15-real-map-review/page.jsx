import Tibia15RealMapReviewKeywordPage, { generateMetadata } from './tibia-15-real-map-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15RealMapReviewKeywordPage />;
}
