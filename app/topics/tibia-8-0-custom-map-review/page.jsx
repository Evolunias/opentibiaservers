import Tibia80CustomMapReviewKeywordPage, { generateMetadata } from './tibia-8-0-custom-map-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80CustomMapReviewKeywordPage />;
}
