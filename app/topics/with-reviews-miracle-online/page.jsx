import WithReviewsMiracleOnlineKeywordPage, { generateMetadata } from './with-reviews-miracle-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMiracleOnlineKeywordPage />;
}
