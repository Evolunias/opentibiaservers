import WithReviewsNostaltherDiscordKeywordPage, { generateMetadata } from './with-reviews-nostalther-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNostaltherDiscordKeywordPage />;
}
