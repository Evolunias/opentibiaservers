import WithReviewsElderaDiscordKeywordPage, { generateMetadata } from './with-reviews-eldera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsElderaDiscordKeywordPage />;
}
