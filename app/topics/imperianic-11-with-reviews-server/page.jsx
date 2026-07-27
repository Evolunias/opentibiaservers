import Imperianic11WithReviewsServerKeywordPage, { generateMetadata } from './imperianic-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic11WithReviewsServerKeywordPage />;
}
