import WithReviewsBlazeraDiscordKeywordPage, { generateMetadata } from './with-reviews-blazera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsBlazeraDiscordKeywordPage />;
}
