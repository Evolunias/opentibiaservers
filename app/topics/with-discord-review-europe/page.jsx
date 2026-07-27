import WithDiscordReviewEuropeKeywordPage, { generateMetadata } from './with-discord-review-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordReviewEuropeKeywordPage />;
}
