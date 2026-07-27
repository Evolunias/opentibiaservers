import Unline12WithReviewsServerKeywordPage, { generateMetadata } from './unline-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline12WithReviewsServerKeywordPage />;
}
