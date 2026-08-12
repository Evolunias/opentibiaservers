import Ramonia76ServerReviewPage, { generateMetadata } from './ramonia-7-6';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ramonia76ServerReviewPage />;
}
