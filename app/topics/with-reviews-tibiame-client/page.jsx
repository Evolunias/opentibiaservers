import WithReviewsTibiameClientKeywordPage, { generateMetadata } from './with-reviews-tibiame-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiameClientKeywordPage />;
}
