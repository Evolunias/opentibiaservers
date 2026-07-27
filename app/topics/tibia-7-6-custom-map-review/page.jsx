import Tibia76CustomMapReviewKeywordPage, { generateMetadata } from './tibia-7-6-custom-map-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76CustomMapReviewKeywordPage />;
}
