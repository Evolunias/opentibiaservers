import WithReviewsCyntaraOnlineKeywordPage, { generateMetadata } from './with-reviews-cyntara-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCyntaraOnlineKeywordPage />;
}
