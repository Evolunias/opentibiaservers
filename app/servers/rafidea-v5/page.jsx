import RafideaV5ServerReviewPage, { generateMetadata } from './rafidea-v5';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RafideaV5ServerReviewPage />;
}
