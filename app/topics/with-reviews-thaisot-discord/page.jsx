import WithReviewsThaisotDiscordKeywordPage, { generateMetadata } from './with-reviews-thaisot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsThaisotDiscordKeywordPage />;
}
