import RetroReviewArgentinaKeywordPage, { generateMetadata } from './retro-review-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroReviewArgentinaKeywordPage />;
}
