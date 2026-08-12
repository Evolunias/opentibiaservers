import DuraServerReviewPage, { generateMetadata } from './dura';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraServerReviewPage />;
}
