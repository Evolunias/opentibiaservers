import WithReviewsOtmadnessDiscordKeywordPage, { generateMetadata } from './with-reviews-otmadness-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOtmadnessDiscordKeywordPage />;
}
