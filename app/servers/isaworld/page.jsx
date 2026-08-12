import IsaworldServerReviewPage, { generateMetadata } from './isaworld';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <IsaworldServerReviewPage />;
}
