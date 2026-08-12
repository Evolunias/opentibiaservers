import OldheartOnlineServerReviewPage, { generateMetadata } from './oldheart-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldheartOnlineServerReviewPage />;
}
