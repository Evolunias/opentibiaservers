import Carlinot15WithReviewsServerKeywordPage, { generateMetadata } from './carlinot-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot15WithReviewsServerKeywordPage />;
}
