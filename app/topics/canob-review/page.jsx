import CanobReviewKeywordPage, { generateMetadata } from './canob-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobReviewKeywordPage />;
}
