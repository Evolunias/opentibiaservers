import WithReviewsSabrehavenOtsKeywordPage, { generateMetadata } from './with-reviews-sabrehaven-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSabrehavenOtsKeywordPage />;
}
