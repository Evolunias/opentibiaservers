import Tibia12CustomMapReviewKeywordPage, { generateMetadata } from './tibia-12-custom-map-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12CustomMapReviewKeywordPage />;
}
