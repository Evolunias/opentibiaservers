import Tibia11RealMapReviewKeywordPage, { generateMetadata } from './tibia-11-real-map-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11RealMapReviewKeywordPage />;
}
