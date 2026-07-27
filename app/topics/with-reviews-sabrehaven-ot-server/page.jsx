import WithReviewsSabrehavenOtServerKeywordPage, { generateMetadata } from './with-reviews-sabrehaven-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSabrehavenOtServerKeywordPage />;
}
