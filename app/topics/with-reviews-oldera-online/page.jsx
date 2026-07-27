import WithReviewsOlderaOnlineKeywordPage, { generateMetadata } from './with-reviews-oldera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOlderaOnlineKeywordPage />;
}
