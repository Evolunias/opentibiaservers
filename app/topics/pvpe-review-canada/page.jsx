import PvpeReviewCanadaKeywordPage, { generateMetadata } from './pvpe-review-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeReviewCanadaKeywordPage />;
}
