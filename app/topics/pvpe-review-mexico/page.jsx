import PvpeReviewMexicoKeywordPage, { generateMetadata } from './pvpe-review-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeReviewMexicoKeywordPage />;
}
