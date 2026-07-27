import Imperianic15WithReviewsServerKeywordPage, { generateMetadata } from './imperianic-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic15WithReviewsServerKeywordPage />;
}
