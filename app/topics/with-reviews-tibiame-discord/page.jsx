import WithReviewsTibiameDiscordKeywordPage, { generateMetadata } from './with-reviews-tibiame-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiameDiscordKeywordPage />;
}
