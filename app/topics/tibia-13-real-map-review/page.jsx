import Tibia13RealMapReviewKeywordPage, { generateMetadata } from './tibia-13-real-map-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13RealMapReviewKeywordPage />;
}
