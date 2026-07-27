import ClassickDrakoria12WithReviewsServerKeywordPage, { generateMetadata } from './classick-drakoria-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoria12WithReviewsServerKeywordPage />;
}
