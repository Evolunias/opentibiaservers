import CustomMapReviewUsaKeywordPage, { generateMetadata } from './custom-map-review-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapReviewUsaKeywordPage />;
}
