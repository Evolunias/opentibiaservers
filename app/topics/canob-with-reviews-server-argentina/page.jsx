import CanobWithReviewsServerArgentinaKeywordPage, { generateMetadata } from './canob-with-reviews-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobWithReviewsServerArgentinaKeywordPage />;
}
