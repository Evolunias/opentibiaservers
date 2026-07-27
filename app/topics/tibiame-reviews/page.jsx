import TibiameReviewsKeywordPage, { generateMetadata } from './tibiame-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameReviewsKeywordPage />;
}
