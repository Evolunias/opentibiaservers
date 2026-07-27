import WithReviewsSerenityGuideKeywordPage, { generateMetadata } from './with-reviews-serenity-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSerenityGuideKeywordPage />;
}
