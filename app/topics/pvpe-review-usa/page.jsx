import PvpeReviewUsaKeywordPage, { generateMetadata } from './pvpe-review-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeReviewUsaKeywordPage />;
}
