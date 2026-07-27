import Imperianic13WithReviewsServerKeywordPage, { generateMetadata } from './imperianic-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic13WithReviewsServerKeywordPage />;
}
