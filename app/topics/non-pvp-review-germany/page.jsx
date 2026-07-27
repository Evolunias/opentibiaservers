import NonPvpReviewGermanyKeywordPage, { generateMetadata } from './non-pvp-review-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpReviewGermanyKeywordPage />;
}
