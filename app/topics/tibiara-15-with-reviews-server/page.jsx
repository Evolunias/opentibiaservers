import Tibiara15WithReviewsServerKeywordPage, { generateMetadata } from './tibiara-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara15WithReviewsServerKeywordPage />;
}
