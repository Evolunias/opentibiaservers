import Tibia12RealMapReviewKeywordPage, { generateMetadata } from './tibia-12-real-map-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12RealMapReviewKeywordPage />;
}
