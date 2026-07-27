import SerenityWithReviewsServerPolandKeywordPage, { generateMetadata } from './serenity-with-reviews-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityWithReviewsServerPolandKeywordPage />;
}
