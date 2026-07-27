import BaiakGunzodusServerKeywordPage, { generateMetadata } from './baiak-gunzodus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakGunzodusServerKeywordPage />;
}
