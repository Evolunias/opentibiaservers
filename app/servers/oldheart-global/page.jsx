import OldheartGlobalServerReviewPage, { generateMetadata } from './oldheart-global';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldheartGlobalServerReviewPage />;
}
