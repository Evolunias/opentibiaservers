import WithReviewsAlasteraGuideKeywordPage, { generateMetadata } from './with-reviews-alastera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsAlasteraGuideKeywordPage />;
}
