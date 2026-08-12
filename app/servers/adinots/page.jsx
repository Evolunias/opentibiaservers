import AdinotsServerReviewPage, { generateMetadata } from './adinots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AdinotsServerReviewPage />;
}
