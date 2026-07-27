import RetroReviewLatinAmericaKeywordPage, { generateMetadata } from './retro-review-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroReviewLatinAmericaKeywordPage />;
}
