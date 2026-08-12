import Yurots76ServerReviewPage, { generateMetadata } from './yurots76';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots76ServerReviewPage />;
}
