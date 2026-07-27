import WithReviewsDiscordUsaKeywordPage, { generateMetadata } from './with-reviews-discord-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsDiscordUsaKeywordPage />;
}
