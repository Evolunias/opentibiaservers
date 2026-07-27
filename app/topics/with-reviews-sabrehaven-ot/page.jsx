import WithReviewsSabrehavenOtKeywordPage, { generateMetadata } from './with-reviews-sabrehaven-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSabrehavenOtKeywordPage />;
}
