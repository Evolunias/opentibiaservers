import WithReviewsClassicusDiscordKeywordPage, { generateMetadata } from './with-reviews-classicus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsClassicusDiscordKeywordPage />;
}
