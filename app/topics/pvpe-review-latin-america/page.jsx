import PvpeReviewLatinAmericaKeywordPage, { generateMetadata } from './pvpe-review-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeReviewLatinAmericaKeywordPage />;
}
