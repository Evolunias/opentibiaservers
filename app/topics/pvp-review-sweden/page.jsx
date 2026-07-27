import PvpReviewSwedenKeywordPage, { generateMetadata } from './pvp-review-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpReviewSwedenKeywordPage />;
}
