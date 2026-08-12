import Darkeria80ServerReviewPage, { generateMetadata } from './darkeria-8-0';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Darkeria80ServerReviewPage />;
}
