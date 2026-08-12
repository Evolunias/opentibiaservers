import Veylaria86ServerReviewPage, { generateMetadata } from './veylaria-8-6';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Veylaria86ServerReviewPage />;
}
