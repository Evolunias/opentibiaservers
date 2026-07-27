import RetroReviewUsaKeywordPage, { generateMetadata } from './retro-review-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroReviewUsaKeywordPage />;
}
