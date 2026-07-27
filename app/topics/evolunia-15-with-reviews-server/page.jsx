import Evolunia15WithReviewsServerKeywordPage, { generateMetadata } from './evolunia-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia15WithReviewsServerKeywordPage />;
}
