import VenerixServerReviewPage, { generateMetadata } from './venerix';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenerixServerReviewPage />;
}
