import PvpReviewUkKeywordPage, { generateMetadata } from './pvp-review-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpReviewUkKeywordPage />;
}
