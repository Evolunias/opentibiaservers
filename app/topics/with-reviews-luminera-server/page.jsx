import WithReviewsLumineraServerKeywordPage, { generateMetadata } from './with-reviews-luminera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsLumineraServerKeywordPage />;
}
