import WithReviewsTibiameGuideKeywordPage, { generateMetadata } from './with-reviews-tibiame-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiameGuideKeywordPage />;
}
