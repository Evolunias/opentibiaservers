import Imperianic12WithReviewsServerKeywordPage, { generateMetadata } from './imperianic-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic12WithReviewsServerKeywordPage />;
}
