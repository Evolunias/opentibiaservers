import BestGunzodusPrivateServerKeywordPage, { generateMetadata } from './best-gunzodus-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestGunzodusPrivateServerKeywordPage />;
}
