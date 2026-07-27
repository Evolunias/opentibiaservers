import WithReviewsNepreniaDiscordKeywordPage, { generateMetadata } from './with-reviews-neprenia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNepreniaDiscordKeywordPage />;
}
