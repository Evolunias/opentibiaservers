import SymikotServerReviewPage, { generateMetadata } from './symikot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SymikotServerReviewPage />;
}
