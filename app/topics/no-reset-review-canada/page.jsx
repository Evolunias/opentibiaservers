import NoResetReviewCanadaKeywordPage, { generateMetadata } from './no-reset-review-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetReviewCanadaKeywordPage />;
}
