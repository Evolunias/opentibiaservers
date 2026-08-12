import AmirotsServerReviewPage, { generateMetadata } from './amirots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmirotsServerReviewPage />;
}
