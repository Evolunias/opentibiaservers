import UnlineReviewKeywordPage, { generateMetadata } from './unline-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineReviewKeywordPage />;
}
