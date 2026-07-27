import WithReviewsSerenityOtsKeywordPage, { generateMetadata } from './with-reviews-serenity-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSerenityOtsKeywordPage />;
}
