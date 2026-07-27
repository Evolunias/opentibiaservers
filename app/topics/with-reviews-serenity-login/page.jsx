import WithReviewsSerenityLoginKeywordPage, { generateMetadata } from './with-reviews-serenity-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSerenityLoginKeywordPage />;
}
