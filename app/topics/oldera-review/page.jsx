import OlderaReviewKeywordPage, { generateMetadata } from './oldera-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaReviewKeywordPage />;
}
