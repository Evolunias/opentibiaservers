import NtoStarReviewKeywordPage, { generateMetadata } from './nto-star-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarReviewKeywordPage />;
}
