import WithReviewsMediviaLoginKeywordPage, { generateMetadata } from './with-reviews-medivia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMediviaLoginKeywordPage />;
}
