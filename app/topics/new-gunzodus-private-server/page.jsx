import NewGunzodusPrivateServerKeywordPage, { generateMetadata } from './new-gunzodus-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewGunzodusPrivateServerKeywordPage />;
}
