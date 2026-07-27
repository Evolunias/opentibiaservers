import SerenityWithReviewsServerUkKeywordPage, { generateMetadata } from './serenity-with-reviews-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityWithReviewsServerUkKeywordPage />;
}
