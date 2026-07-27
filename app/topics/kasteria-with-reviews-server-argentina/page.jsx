import KasteriaWithReviewsServerArgentinaKeywordPage, { generateMetadata } from './kasteria-with-reviews-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaWithReviewsServerArgentinaKeywordPage />;
}
