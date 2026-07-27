import ShadowcoresReviewKeywordPage, { generateMetadata } from './shadowcores-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresReviewKeywordPage />;
}
