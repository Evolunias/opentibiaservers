import BaiakReviewMexicoKeywordPage, { generateMetadata } from './baiak-review-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakReviewMexicoKeywordPage />;
}
