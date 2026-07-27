import ImperianicReviewsKeywordPage, { generateMetadata } from './imperianic-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicReviewsKeywordPage />;
}
