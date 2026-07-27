import Tibiara14WithReviewsServerKeywordPage, { generateMetadata } from './tibiara-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara14WithReviewsServerKeywordPage />;
}
