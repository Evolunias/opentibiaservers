import WithReviewsSabrehavenOnlineKeywordPage, { generateMetadata } from './with-reviews-sabrehaven-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSabrehavenOnlineKeywordPage />;
}
