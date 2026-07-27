import RangerSArcaniReviewsKeywordPage, { generateMetadata } from './ranger-s-arcani-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniReviewsKeywordPage />;
}
