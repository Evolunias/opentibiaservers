import AmeriaReviewsKeywordPage, { generateMetadata } from './ameria-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaReviewsKeywordPage />;
}
