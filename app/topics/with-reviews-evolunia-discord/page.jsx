import WithReviewsEvoluniaDiscordKeywordPage, { generateMetadata } from './with-reviews-evolunia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsEvoluniaDiscordKeywordPage />;
}
