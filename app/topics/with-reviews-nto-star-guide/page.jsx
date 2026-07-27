import WithReviewsNtoStarGuideKeywordPage, { generateMetadata } from './with-reviews-nto-star-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNtoStarGuideKeywordPage />;
}
