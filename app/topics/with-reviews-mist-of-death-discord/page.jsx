import WithReviewsMistOfDeathDiscordKeywordPage, { generateMetadata } from './with-reviews-mist-of-death-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMistOfDeathDiscordKeywordPage />;
}
