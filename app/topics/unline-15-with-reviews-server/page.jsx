import Unline15WithReviewsServerKeywordPage, { generateMetadata } from './unline-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline15WithReviewsServerKeywordPage />;
}
