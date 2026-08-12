import KimeraotServerReviewPage, { generateMetadata } from './kimeraot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KimeraotServerReviewPage />;
}
