import WithReviewsRealestaDiscordKeywordPage, { generateMetadata } from './with-reviews-realesta-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRealestaDiscordKeywordPage />;
}
