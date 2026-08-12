import SanctumotServerReviewPage, { generateMetadata } from './sanctumot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SanctumotServerReviewPage />;
}
