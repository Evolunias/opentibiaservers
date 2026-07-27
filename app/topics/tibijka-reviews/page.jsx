import TibijkaReviewsKeywordPage, { generateMetadata } from './tibijka-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaReviewsKeywordPage />;
}
