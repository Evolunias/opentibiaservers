import MidhemReviewKeywordPage, { generateMetadata } from './midhem-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemReviewKeywordPage />;
}
