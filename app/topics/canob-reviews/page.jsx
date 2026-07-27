import CanobReviewsKeywordPage, { generateMetadata } from './canob-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobReviewsKeywordPage />;
}
