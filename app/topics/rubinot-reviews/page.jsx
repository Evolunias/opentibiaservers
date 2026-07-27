import RubinotReviewsKeywordPage, { generateMetadata } from './rubinot-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotReviewsKeywordPage />;
}
