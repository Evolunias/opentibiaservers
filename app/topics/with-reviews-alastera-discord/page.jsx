import WithReviewsAlasteraDiscordKeywordPage, { generateMetadata } from './with-reviews-alastera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsAlasteraDiscordKeywordPage />;
}
