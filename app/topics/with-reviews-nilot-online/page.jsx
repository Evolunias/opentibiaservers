import WithReviewsNilotOnlineKeywordPage, { generateMetadata } from './with-reviews-nilot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNilotOnlineKeywordPage />;
}
