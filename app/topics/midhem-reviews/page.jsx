import MidhemReviewsKeywordPage, { generateMetadata } from './midhem-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemReviewsKeywordPage />;
}
