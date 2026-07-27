import WithReviewsDiscordEuropeKeywordPage, { generateMetadata } from './with-reviews-discord-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsDiscordEuropeKeywordPage />;
}
