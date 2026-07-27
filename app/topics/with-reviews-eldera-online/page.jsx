import WithReviewsElderaOnlineKeywordPage, { generateMetadata } from './with-reviews-eldera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsElderaOnlineKeywordPage />;
}
