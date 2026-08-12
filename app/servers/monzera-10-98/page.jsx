import Monzera1098ServerReviewPage, { generateMetadata } from './monzera-10-98';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Monzera1098ServerReviewPage />;
}
