import CanobWithReviewsServerNorthAmericaKeywordPage, { generateMetadata } from './canob-with-reviews-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobWithReviewsServerNorthAmericaKeywordPage />;
}
