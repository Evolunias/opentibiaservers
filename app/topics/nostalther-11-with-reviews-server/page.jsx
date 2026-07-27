import Nostalther11WithReviewsServerKeywordPage, { generateMetadata } from './nostalther-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nostalther11WithReviewsServerKeywordPage />;
}
