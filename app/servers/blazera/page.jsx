import BlazeraServerReviewPage, { generateMetadata } from './blazera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraServerReviewPage />;
}
