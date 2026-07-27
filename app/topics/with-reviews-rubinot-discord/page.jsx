import WithReviewsRubinotDiscordKeywordPage, { generateMetadata } from './with-reviews-rubinot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRubinotDiscordKeywordPage />;
}
