import ClassicusWithReviewsServerPolandKeywordPage, { generateMetadata } from './classicus-with-reviews-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusWithReviewsServerPolandKeywordPage />;
}
