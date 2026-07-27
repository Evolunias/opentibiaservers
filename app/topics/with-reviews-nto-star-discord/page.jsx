import WithReviewsNtoStarDiscordKeywordPage, { generateMetadata } from './with-reviews-nto-star-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNtoStarDiscordKeywordPage />;
}
