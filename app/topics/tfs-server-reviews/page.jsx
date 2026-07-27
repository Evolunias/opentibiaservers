import TfsServerReviewsKeywordPage, { generateMetadata } from './tfs-server-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TfsServerReviewsKeywordPage />;
}
