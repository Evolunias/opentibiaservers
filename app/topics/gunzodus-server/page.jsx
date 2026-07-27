import GunzodusServerKeywordPage, { generateMetadata } from './gunzodus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusServerKeywordPage />;
}
