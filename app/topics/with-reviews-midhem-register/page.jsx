import WithReviewsMidhemRegisterKeywordPage, { generateMetadata } from './with-reviews-midhem-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMidhemRegisterKeywordPage />;
}
