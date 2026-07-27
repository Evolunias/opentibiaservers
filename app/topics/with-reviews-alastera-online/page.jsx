import WithReviewsAlasteraOnlineKeywordPage, { generateMetadata } from './with-reviews-alastera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsAlasteraOnlineKeywordPage />;
}
