import WithReviewsNtoStarOnlineKeywordPage, { generateMetadata } from './with-reviews-nto-star-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNtoStarOnlineKeywordPage />;
}
