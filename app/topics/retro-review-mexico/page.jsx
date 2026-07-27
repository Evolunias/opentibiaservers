import RetroReviewMexicoKeywordPage, { generateMetadata } from './retro-review-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroReviewMexicoKeywordPage />;
}
