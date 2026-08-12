import EloriaServerReviewPage, { generateMetadata } from './eloria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EloriaServerReviewPage />;
}
