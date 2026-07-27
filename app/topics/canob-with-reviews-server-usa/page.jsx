import CanobWithReviewsServerUsaKeywordPage, { generateMetadata } from './canob-with-reviews-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobWithReviewsServerUsaKeywordPage />;
}
