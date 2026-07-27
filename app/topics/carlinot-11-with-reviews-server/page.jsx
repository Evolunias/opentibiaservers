import Carlinot11WithReviewsServerKeywordPage, { generateMetadata } from './carlinot-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot11WithReviewsServerKeywordPage />;
}
