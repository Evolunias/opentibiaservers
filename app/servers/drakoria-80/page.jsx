import Drakoria80ServerReviewPage, { generateMetadata } from './drakoria-80';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Drakoria80ServerReviewPage />;
}
