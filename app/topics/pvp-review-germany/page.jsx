import PvpReviewGermanyKeywordPage, { generateMetadata } from './pvp-review-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpReviewGermanyKeywordPage />;
}
