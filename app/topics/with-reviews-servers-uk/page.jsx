import WithReviewsServersUkKeywordPage, { generateMetadata } from './with-reviews-servers-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsServersUkKeywordPage />;
}
