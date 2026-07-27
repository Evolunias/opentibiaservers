import Carlinot14WithReviewsServerKeywordPage, { generateMetadata } from './carlinot-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot14WithReviewsServerKeywordPage />;
}
