import WithReviewsClientFranceKeywordPage, { generateMetadata } from './with-reviews-client-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsClientFranceKeywordPage />;
}
