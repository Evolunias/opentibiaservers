import CanobWithReviewsServerCanadaKeywordPage, { generateMetadata } from './canob-with-reviews-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobWithReviewsServerCanadaKeywordPage />;
}
