import MistOfDeathReviewsKeywordPage, { generateMetadata } from './mist-of-death-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathReviewsKeywordPage />;
}
