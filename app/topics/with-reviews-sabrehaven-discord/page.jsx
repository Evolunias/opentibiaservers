import WithReviewsSabrehavenDiscordKeywordPage, { generateMetadata } from './with-reviews-sabrehaven-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSabrehavenDiscordKeywordPage />;
}
