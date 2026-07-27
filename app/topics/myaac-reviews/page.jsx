import MyaacReviewsKeywordPage, { generateMetadata } from './myaac-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MyaacReviewsKeywordPage />;
}
