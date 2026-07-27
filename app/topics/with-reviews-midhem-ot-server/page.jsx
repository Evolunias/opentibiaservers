import WithReviewsMidhemOtServerKeywordPage, { generateMetadata } from './with-reviews-midhem-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMidhemOtServerKeywordPage />;
}
