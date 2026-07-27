import WithReviewsNostaltherOnlineKeywordPage, { generateMetadata } from './with-reviews-nostalther-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNostaltherOnlineKeywordPage />;
}
