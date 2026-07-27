import WithReviewsArchlightDiscordKeywordPage, { generateMetadata } from './with-reviews-archlight-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsArchlightDiscordKeywordPage />;
}
