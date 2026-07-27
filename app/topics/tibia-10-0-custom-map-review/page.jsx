import Tibia100CustomMapReviewKeywordPage, { generateMetadata } from './tibia-10-0-custom-map-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100CustomMapReviewKeywordPage />;
}
