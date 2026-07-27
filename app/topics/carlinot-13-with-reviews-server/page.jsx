import Carlinot13WithReviewsServerKeywordPage, { generateMetadata } from './carlinot-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot13WithReviewsServerKeywordPage />;
}
