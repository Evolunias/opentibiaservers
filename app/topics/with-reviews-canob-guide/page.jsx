import WithReviewsCanobGuideKeywordPage, { generateMetadata } from './with-reviews-canob-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCanobGuideKeywordPage />;
}
