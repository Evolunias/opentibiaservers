import KasteriaReviewsKeywordPage, { generateMetadata } from './kasteria-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaReviewsKeywordPage />;
}
