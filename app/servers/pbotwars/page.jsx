import PbotwarsServerReviewPage, { generateMetadata } from './pbotwars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PbotwarsServerReviewPage />;
}
