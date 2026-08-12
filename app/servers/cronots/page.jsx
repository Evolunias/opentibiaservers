import CronotsServerReviewPage, { generateMetadata } from './cronots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CronotsServerReviewPage />;
}
