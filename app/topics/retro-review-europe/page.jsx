import RetroReviewEuropeKeywordPage, { generateMetadata } from './retro-review-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroReviewEuropeKeywordPage />;
}
