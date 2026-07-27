import TheForgottenServerReviewsKeywordPage, { generateMetadata } from './the-forgotten-server-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TheForgottenServerReviewsKeywordPage />;
}
