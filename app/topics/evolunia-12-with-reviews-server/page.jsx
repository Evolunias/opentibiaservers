import Evolunia12WithReviewsServerKeywordPage, { generateMetadata } from './evolunia-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia12WithReviewsServerKeywordPage />;
}
