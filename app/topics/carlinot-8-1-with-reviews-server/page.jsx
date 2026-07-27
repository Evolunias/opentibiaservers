import Carlinot81WithReviewsServerKeywordPage, { generateMetadata } from './carlinot-8-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot81WithReviewsServerKeywordPage />;
}
