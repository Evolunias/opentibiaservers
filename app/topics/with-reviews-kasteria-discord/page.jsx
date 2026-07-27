import WithReviewsKasteriaDiscordKeywordPage, { generateMetadata } from './with-reviews-kasteria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsKasteriaDiscordKeywordPage />;
}
