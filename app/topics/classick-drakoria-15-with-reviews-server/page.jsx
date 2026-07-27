import ClassickDrakoria15WithReviewsServerKeywordPage, { generateMetadata } from './classick-drakoria-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoria15WithReviewsServerKeywordPage />;
}
