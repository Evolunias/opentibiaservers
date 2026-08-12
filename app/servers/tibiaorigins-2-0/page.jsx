import Tibiaorigins20ServerReviewPage, { generateMetadata } from './tibiaorigins-2-0';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaorigins20ServerReviewPage />;
}
