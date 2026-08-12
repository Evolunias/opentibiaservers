import GunzodusServerReviewPage, { generateMetadata } from './gunzodus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusServerReviewPage />;
}
