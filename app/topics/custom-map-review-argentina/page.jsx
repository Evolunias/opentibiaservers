import CustomMapReviewArgentinaKeywordPage, { generateMetadata } from './custom-map-review-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapReviewArgentinaKeywordPage />;
}
