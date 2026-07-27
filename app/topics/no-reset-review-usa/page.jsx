import NoResetReviewUsaKeywordPage, { generateMetadata } from './no-reset-review-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetReviewUsaKeywordPage />;
}
