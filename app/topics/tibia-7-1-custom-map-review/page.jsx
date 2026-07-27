import Tibia71CustomMapReviewKeywordPage, { generateMetadata } from './tibia-7-1-custom-map-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71CustomMapReviewKeywordPage />;
}
