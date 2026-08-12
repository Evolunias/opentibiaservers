import ArmanderiaServerReviewPage, { generateMetadata } from './armanderia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArmanderiaServerReviewPage />;
}
