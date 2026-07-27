import WithDiscordReviewSwedenKeywordPage, { generateMetadata } from './with-discord-review-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordReviewSwedenKeywordPage />;
}
