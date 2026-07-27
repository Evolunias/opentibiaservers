import NepreniaWithReviewsServerFranceKeywordPage, { generateMetadata } from './neprenia-with-reviews-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaWithReviewsServerFranceKeywordPage />;
}
