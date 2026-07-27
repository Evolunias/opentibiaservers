import NonPvpReviewEuropeKeywordPage, { generateMetadata } from './non-pvp-review-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpReviewEuropeKeywordPage />;
}
