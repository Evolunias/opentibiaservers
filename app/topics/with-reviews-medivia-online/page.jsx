import WithReviewsMediviaOnlineKeywordPage, { generateMetadata } from './with-reviews-medivia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMediviaOnlineKeywordPage />;
}
