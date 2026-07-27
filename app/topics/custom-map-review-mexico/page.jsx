import CustomMapReviewMexicoKeywordPage, { generateMetadata } from './custom-map-review-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapReviewMexicoKeywordPage />;
}
