import WithReviewsSabrehavenLoginKeywordPage, { generateMetadata } from './with-reviews-sabrehaven-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSabrehavenLoginKeywordPage />;
}
