import KasteriaWithReviewsServerFranceKeywordPage, { generateMetadata } from './kasteria-with-reviews-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaWithReviewsServerFranceKeywordPage />;
}
