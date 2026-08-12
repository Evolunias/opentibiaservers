import MelhorotServerReviewPage, { generateMetadata } from './melhorot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MelhorotServerReviewPage />;
}
