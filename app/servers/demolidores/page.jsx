import DemolidoresServerReviewPage, { generateMetadata } from './demolidores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresServerReviewPage />;
}
