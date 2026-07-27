import RealMapReviewLatinAmericaKeywordPage, { generateMetadata } from './real-map-review-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapReviewLatinAmericaKeywordPage />;
}
