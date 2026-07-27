import ImperianicReviewKeywordPage, { generateMetadata } from './imperianic-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicReviewKeywordPage />;
}
