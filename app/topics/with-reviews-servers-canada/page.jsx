import WithReviewsServersCanadaKeywordPage, { generateMetadata } from './with-reviews-servers-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsServersCanadaKeywordPage />;
}
