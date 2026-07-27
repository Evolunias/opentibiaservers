import NoResetReviewPolandKeywordPage, { generateMetadata } from './no-reset-review-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetReviewPolandKeywordPage />;
}
