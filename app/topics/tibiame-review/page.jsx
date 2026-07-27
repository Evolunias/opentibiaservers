import TibiameReviewKeywordPage, { generateMetadata } from './tibiame-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameReviewKeywordPage />;
}
