import RetroReviewCanadaKeywordPage, { generateMetadata } from './retro-review-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroReviewCanadaKeywordPage />;
}
