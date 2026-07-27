import Nostalther12WithReviewsServerKeywordPage, { generateMetadata } from './nostalther-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nostalther12WithReviewsServerKeywordPage />;
}
