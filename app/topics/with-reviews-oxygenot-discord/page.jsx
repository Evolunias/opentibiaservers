import WithReviewsOxygenotDiscordKeywordPage, { generateMetadata } from './with-reviews-oxygenot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOxygenotDiscordKeywordPage />;
}
