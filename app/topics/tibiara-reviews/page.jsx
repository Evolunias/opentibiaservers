import TibiaraReviewsKeywordPage, { generateMetadata } from './tibiara-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraReviewsKeywordPage />;
}
