import Nostalther15WithReviewsServerKeywordPage, { generateMetadata } from './nostalther-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nostalther15WithReviewsServerKeywordPage />;
}
