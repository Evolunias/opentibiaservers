import WithReviewsNepreniaOnlineKeywordPage, { generateMetadata } from './with-reviews-neprenia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNepreniaOnlineKeywordPage />;
}
