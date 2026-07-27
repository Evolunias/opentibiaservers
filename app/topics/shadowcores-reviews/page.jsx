import ShadowcoresReviewsKeywordPage, { generateMetadata } from './shadowcores-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresReviewsKeywordPage />;
}
