import WithReviewsCanobOnlineKeywordPage, { generateMetadata } from './with-reviews-canob-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCanobOnlineKeywordPage />;
}
