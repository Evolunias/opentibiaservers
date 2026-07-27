import PvpReviewSouthAmericaKeywordPage, { generateMetadata } from './pvp-review-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpReviewSouthAmericaKeywordPage />;
}
