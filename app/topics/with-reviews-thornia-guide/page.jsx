import WithReviewsThorniaGuideKeywordPage, { generateMetadata } from './with-reviews-thornia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsThorniaGuideKeywordPage />;
}
