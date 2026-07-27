import WithReviewsImperianicOnlineKeywordPage, { generateMetadata } from './with-reviews-imperianic-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsImperianicOnlineKeywordPage />;
}
