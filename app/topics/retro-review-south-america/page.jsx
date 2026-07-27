import RetroReviewSouthAmericaKeywordPage, { generateMetadata } from './retro-review-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroReviewSouthAmericaKeywordPage />;
}
