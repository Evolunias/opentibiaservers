import Carlinot12WithReviewsServerKeywordPage, { generateMetadata } from './carlinot-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot12WithReviewsServerKeywordPage />;
}
