import UnlineReviewsKeywordPage, { generateMetadata } from './unline-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineReviewsKeywordPage />;
}
