import WithReviewsCoxaotOnlineKeywordPage, { generateMetadata } from './with-reviews-coxaot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCoxaotOnlineKeywordPage />;
}
