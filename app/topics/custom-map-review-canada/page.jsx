import CustomMapReviewCanadaKeywordPage, { generateMetadata } from './custom-map-review-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapReviewCanadaKeywordPage />;
}
