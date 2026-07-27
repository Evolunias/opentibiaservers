import NewGunzodusServerKeywordPage, { generateMetadata } from './new-gunzodus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewGunzodusServerKeywordPage />;
}
