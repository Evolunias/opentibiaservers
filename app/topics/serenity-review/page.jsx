import SerenityReviewKeywordPage, { generateMetadata } from './serenity-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityReviewKeywordPage />;
}
