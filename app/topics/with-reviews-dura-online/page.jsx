import WithReviewsDuraOnlineKeywordPage, { generateMetadata } from './with-reviews-dura-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsDuraOnlineKeywordPage />;
}
