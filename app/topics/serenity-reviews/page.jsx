import SerenityReviewsKeywordPage, { generateMetadata } from './serenity-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityReviewsKeywordPage />;
}
