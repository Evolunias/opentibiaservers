import NonPvpReviewUkKeywordPage, { generateMetadata } from './non-pvp-review-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpReviewUkKeywordPage />;
}
