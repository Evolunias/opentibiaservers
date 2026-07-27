import WithReviewsArcaniarlOnlineKeywordPage, { generateMetadata } from './with-reviews-arcaniarl-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsArcaniarlOnlineKeywordPage />;
}
