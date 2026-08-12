import NetuniaServerReviewPage, { generateMetadata } from './netunia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NetuniaServerReviewPage />;
}
