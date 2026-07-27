import CustomMapReviewPolandKeywordPage, { generateMetadata } from './custom-map-review-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapReviewPolandKeywordPage />;
}
