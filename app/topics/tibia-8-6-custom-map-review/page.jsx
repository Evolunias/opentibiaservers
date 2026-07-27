import Tibia86CustomMapReviewKeywordPage, { generateMetadata } from './tibia-8-6-custom-map-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86CustomMapReviewKeywordPage />;
}
