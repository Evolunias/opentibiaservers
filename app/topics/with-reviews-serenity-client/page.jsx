import WithReviewsSerenityClientKeywordPage, { generateMetadata } from './with-reviews-serenity-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSerenityClientKeywordPage />;
}
