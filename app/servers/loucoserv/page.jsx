import LoucoservServerReviewPage, { generateMetadata } from './loucoserv';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LoucoservServerReviewPage />;
}
