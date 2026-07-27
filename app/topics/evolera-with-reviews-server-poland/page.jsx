import EvoleraWithReviewsServerPolandKeywordPage, { generateMetadata } from './evolera-with-reviews-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraWithReviewsServerPolandKeywordPage />;
}
