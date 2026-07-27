import OtlandReviewsKeywordPage, { generateMetadata } from './otland-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandReviewsKeywordPage />;
}
