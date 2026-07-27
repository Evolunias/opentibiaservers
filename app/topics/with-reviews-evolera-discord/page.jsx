import WithReviewsEvoleraDiscordKeywordPage, { generateMetadata } from './with-reviews-evolera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsEvoleraDiscordKeywordPage />;
}
