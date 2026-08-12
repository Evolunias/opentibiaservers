import SpiderotServerReviewPage, { generateMetadata } from './spiderot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SpiderotServerReviewPage />;
}
