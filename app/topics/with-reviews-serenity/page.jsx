import WithReviewsSerenityKeywordPage, { generateMetadata } from './with-reviews-serenity';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSerenityKeywordPage />;
}
