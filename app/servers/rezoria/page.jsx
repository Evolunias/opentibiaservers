import RezoriaServerReviewPage, { generateMetadata } from './rezoria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RezoriaServerReviewPage />;
}
