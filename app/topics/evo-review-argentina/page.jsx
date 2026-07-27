import EvoReviewArgentinaKeywordPage, { generateMetadata } from './evo-review-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoReviewArgentinaKeywordPage />;
}
