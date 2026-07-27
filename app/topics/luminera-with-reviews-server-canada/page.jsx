import LumineraWithReviewsServerCanadaKeywordPage, { generateMetadata } from './luminera-with-reviews-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraWithReviewsServerCanadaKeywordPage />;
}
