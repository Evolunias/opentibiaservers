import NoResetReviewUkKeywordPage, { generateMetadata } from './no-reset-review-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetReviewUkKeywordPage />;
}
