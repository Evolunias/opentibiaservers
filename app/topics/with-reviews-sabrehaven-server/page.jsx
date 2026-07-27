import WithReviewsSabrehavenServerKeywordPage, { generateMetadata } from './with-reviews-sabrehaven-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSabrehavenServerKeywordPage />;
}
