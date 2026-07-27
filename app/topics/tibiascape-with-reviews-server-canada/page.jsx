import TibiascapeWithReviewsServerCanadaKeywordPage, { generateMetadata } from './tibiascape-with-reviews-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeWithReviewsServerCanadaKeywordPage />;
}
