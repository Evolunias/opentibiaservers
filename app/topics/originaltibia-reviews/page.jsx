import OriginaltibiaReviewsKeywordPage, { generateMetadata } from './originaltibia-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaReviewsKeywordPage />;
}
