import CustomMapReviewLatinAmericaKeywordPage, { generateMetadata } from './custom-map-review-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapReviewLatinAmericaKeywordPage />;
}
