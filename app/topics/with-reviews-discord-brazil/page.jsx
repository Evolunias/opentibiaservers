import WithReviewsDiscordBrazilKeywordPage, { generateMetadata } from './with-reviews-discord-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsDiscordBrazilKeywordPage />;
}
