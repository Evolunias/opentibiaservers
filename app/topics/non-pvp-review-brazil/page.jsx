import NonPvpReviewBrazilKeywordPage, { generateMetadata } from './non-pvp-review-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpReviewBrazilKeywordPage />;
}
