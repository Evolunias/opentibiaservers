import DuraOnline12WithReviewsServerKeywordPage, { generateMetadata } from './dura-online-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline12WithReviewsServerKeywordPage />;
}
