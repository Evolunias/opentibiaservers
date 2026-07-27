import NepreniaReviewsKeywordPage, { generateMetadata } from './neprenia-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaReviewsKeywordPage />;
}
