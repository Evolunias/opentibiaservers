import TrashformersReviewKeywordPage, { generateMetadata } from './trashformers-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersReviewKeywordPage />;
}
