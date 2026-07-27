import WithDiscordReviewBrazilKeywordPage, { generateMetadata } from './with-discord-review-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordReviewBrazilKeywordPage />;
}
