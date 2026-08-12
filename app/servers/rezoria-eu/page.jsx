import RezoriaEuServerReviewPage, { generateMetadata } from './rezoria-eu';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RezoriaEuServerReviewPage />;
}
