import WithDiscordReviewPolandKeywordPage, { generateMetadata } from './with-discord-review-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordReviewPolandKeywordPage />;
}
