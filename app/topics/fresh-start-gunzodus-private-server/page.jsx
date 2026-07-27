import FreshStartGunzodusPrivateServerKeywordPage, { generateMetadata } from './fresh-start-gunzodus-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartGunzodusPrivateServerKeywordPage />;
}
