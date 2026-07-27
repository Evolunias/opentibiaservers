import WithReviewsOtServerFranceKeywordPage, { generateMetadata } from './with-reviews-ot-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOtServerFranceKeywordPage />;
}
