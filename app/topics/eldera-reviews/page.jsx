import ElderaReviewsKeywordPage, { generateMetadata } from './eldera-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaReviewsKeywordPage />;
}
