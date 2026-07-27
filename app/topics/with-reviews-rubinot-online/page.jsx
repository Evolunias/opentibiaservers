import WithReviewsRubinotOnlineKeywordPage, { generateMetadata } from './with-reviews-rubinot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRubinotOnlineKeywordPage />;
}
