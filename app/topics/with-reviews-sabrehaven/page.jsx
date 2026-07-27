import WithReviewsSabrehavenKeywordPage, { generateMetadata } from './with-reviews-sabrehaven';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSabrehavenKeywordPage />;
}
