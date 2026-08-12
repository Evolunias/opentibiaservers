import OldevoPlServerReviewPage, { generateMetadata } from './oldevo-pl';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldevoPlServerReviewPage />;
}
