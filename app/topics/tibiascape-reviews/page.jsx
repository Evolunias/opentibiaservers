import TibiascapeReviewsKeywordPage, { generateMetadata } from './tibiascape-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeReviewsKeywordPage />;
}
