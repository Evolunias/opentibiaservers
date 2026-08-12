import VestiaForeverServerReviewPage, { generateMetadata } from './vestia-forever';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VestiaForeverServerReviewPage />;
}
