import MistOfDeathReviewKeywordPage, { generateMetadata } from './mist-of-death-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathReviewKeywordPage />;
}
