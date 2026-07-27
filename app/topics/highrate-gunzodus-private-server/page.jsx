import HighrateGunzodusPrivateServerKeywordPage, { generateMetadata } from './highrate-gunzodus-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateGunzodusPrivateServerKeywordPage />;
}
