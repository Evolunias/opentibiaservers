import WithReviewsCanobDiscordKeywordPage, { generateMetadata } from './with-reviews-canob-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCanobDiscordKeywordPage />;
}
