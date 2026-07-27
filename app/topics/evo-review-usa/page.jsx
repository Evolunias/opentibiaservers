import EvoReviewUsaKeywordPage, { generateMetadata } from './evo-review-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoReviewUsaKeywordPage />;
}
