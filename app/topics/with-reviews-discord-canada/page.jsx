import WithReviewsDiscordCanadaKeywordPage, { generateMetadata } from './with-reviews-discord-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsDiscordCanadaKeywordPage />;
}
