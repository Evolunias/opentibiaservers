import WithReviewsSerenityDiscordKeywordPage, { generateMetadata } from './with-reviews-serenity-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSerenityDiscordKeywordPage />;
}
