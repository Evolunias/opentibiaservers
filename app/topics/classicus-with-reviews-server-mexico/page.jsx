import ClassicusWithReviewsServerMexicoKeywordPage, { generateMetadata } from './classicus-with-reviews-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusWithReviewsServerMexicoKeywordPage />;
}
