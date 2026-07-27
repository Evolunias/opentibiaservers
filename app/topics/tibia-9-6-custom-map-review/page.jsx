import Tibia96CustomMapReviewKeywordPage, { generateMetadata } from './tibia-9-6-custom-map-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96CustomMapReviewKeywordPage />;
}
