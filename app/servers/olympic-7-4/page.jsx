import Olympic74ServerReviewPage, { generateMetadata } from './olympic-7-4';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Olympic74ServerReviewPage />;
}
