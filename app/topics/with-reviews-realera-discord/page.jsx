import WithReviewsRealeraDiscordKeywordPage, { generateMetadata } from './with-reviews-realera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRealeraDiscordKeywordPage />;
}
