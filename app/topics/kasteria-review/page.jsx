import KasteriaReviewKeywordPage, { generateMetadata } from './kasteria-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaReviewKeywordPage />;
}
