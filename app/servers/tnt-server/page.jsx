import TntServerServerReviewPage, { generateMetadata } from './tnt-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TntServerServerReviewPage />;
}
