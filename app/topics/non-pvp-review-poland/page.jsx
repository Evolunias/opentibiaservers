import NonPvpReviewPolandKeywordPage, { generateMetadata } from './non-pvp-review-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpReviewPolandKeywordPage />;
}
