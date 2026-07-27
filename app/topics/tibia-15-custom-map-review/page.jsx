import Tibia15CustomMapReviewKeywordPage, { generateMetadata } from './tibia-15-custom-map-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15CustomMapReviewKeywordPage />;
}
