import WithReviewsSabrehavenClientKeywordPage, { generateMetadata } from './with-reviews-sabrehaven-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSabrehavenClientKeywordPage />;
}
