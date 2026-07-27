import PvpeReviewNorthAmericaKeywordPage, { generateMetadata } from './pvpe-review-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeReviewNorthAmericaKeywordPage />;
}
