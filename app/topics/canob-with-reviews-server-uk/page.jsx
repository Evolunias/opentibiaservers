import CanobWithReviewsServerUkKeywordPage, { generateMetadata } from './canob-with-reviews-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobWithReviewsServerUkKeywordPage />;
}
