import ZathrothServerReviewPage, { generateMetadata } from './zathroth';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZathrothServerReviewPage />;
}
