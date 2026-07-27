import WithReviewsOlderaDiscordKeywordPage, { generateMetadata } from './with-reviews-oldera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOlderaDiscordKeywordPage />;
}
