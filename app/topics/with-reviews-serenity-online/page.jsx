import WithReviewsSerenityOnlineKeywordPage, { generateMetadata } from './with-reviews-serenity-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSerenityOnlineKeywordPage />;
}
