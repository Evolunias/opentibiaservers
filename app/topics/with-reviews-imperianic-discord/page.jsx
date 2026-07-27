import WithReviewsImperianicDiscordKeywordPage, { generateMetadata } from './with-reviews-imperianic-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsImperianicDiscordKeywordPage />;
}
