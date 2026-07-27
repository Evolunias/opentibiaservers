import WithReviewsLumineraDiscordKeywordPage, { generateMetadata } from './with-reviews-luminera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsLumineraDiscordKeywordPage />;
}
