import Nostalther13WithReviewsServerKeywordPage, { generateMetadata } from './nostalther-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nostalther13WithReviewsServerKeywordPage />;
}
