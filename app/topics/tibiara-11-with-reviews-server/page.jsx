import Tibiara11WithReviewsServerKeywordPage, { generateMetadata } from './tibiara-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara11WithReviewsServerKeywordPage />;
}
