import OlderaReviewsKeywordPage, { generateMetadata } from './oldera-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaReviewsKeywordPage />;
}
