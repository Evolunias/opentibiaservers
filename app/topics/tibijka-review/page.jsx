import TibijkaReviewKeywordPage, { generateMetadata } from './tibijka-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaReviewKeywordPage />;
}
