import MiracleServerReviewPage, { generateMetadata } from './miracle';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleServerReviewPage />;
}
