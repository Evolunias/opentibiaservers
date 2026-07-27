import NonPvpReviewUsaKeywordPage, { generateMetadata } from './non-pvp-review-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpReviewUsaKeywordPage />;
}
