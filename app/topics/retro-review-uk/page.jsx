import RetroReviewUkKeywordPage, { generateMetadata } from './retro-review-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroReviewUkKeywordPage />;
}
