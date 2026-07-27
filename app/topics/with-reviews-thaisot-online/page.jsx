import WithReviewsThaisotOnlineKeywordPage, { generateMetadata } from './with-reviews-thaisot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsThaisotOnlineKeywordPage />;
}
