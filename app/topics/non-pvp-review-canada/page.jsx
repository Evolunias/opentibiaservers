import NonPvpReviewCanadaKeywordPage, { generateMetadata } from './non-pvp-review-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpReviewCanadaKeywordPage />;
}
