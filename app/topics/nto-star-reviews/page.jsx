import NtoStarReviewsKeywordPage, { generateMetadata } from './nto-star-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarReviewsKeywordPage />;
}
