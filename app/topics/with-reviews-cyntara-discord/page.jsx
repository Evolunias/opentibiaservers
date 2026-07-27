import WithReviewsCyntaraDiscordKeywordPage, { generateMetadata } from './with-reviews-cyntara-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCyntaraDiscordKeywordPage />;
}
