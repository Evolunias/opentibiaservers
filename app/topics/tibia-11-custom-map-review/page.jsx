import Tibia11CustomMapReviewKeywordPage, { generateMetadata } from './tibia-11-custom-map-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11CustomMapReviewKeywordPage />;
}
