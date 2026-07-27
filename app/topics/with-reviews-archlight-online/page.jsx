import WithReviewsArchlightOnlineKeywordPage, { generateMetadata } from './with-reviews-archlight-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsArchlightOnlineKeywordPage />;
}
