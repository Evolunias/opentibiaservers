import Tibia81CustomMapReviewKeywordPage, { generateMetadata } from './tibia-8-1-custom-map-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81CustomMapReviewKeywordPage />;
}
