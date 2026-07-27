import GunzodusPrivateServerKeywordPage, { generateMetadata } from './gunzodus-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusPrivateServerKeywordPage />;
}
