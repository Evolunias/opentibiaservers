import TibiascapeWithReviewsServerFranceKeywordPage, { generateMetadata } from './tibiascape-with-reviews-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeWithReviewsServerFranceKeywordPage />;
}
