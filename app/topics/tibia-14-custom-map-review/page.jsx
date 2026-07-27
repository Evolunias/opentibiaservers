import Tibia14CustomMapReviewKeywordPage, { generateMetadata } from './tibia-14-custom-map-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14CustomMapReviewKeywordPage />;
}
