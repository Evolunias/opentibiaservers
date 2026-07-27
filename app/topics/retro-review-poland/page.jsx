import RetroReviewPolandKeywordPage, { generateMetadata } from './retro-review-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroReviewPolandKeywordPage />;
}
