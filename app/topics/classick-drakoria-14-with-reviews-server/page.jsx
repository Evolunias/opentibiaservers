import ClassickDrakoria14WithReviewsServerKeywordPage, { generateMetadata } from './classick-drakoria-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoria14WithReviewsServerKeywordPage />;
}
