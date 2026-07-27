import BaiakReviewFranceKeywordPage, { generateMetadata } from './baiak-review-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakReviewFranceKeywordPage />;
}
