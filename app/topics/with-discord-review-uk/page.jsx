import WithDiscordReviewUkKeywordPage, { generateMetadata } from './with-discord-review-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordReviewUkKeywordPage />;
}
