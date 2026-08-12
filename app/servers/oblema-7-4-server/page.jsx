import Oblema74ServerServerReviewPage, { generateMetadata } from './oblema-7-4-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oblema74ServerServerReviewPage />;
}
