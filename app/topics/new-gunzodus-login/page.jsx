import NewGunzodusLoginKeywordPage, { generateMetadata } from './new-gunzodus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewGunzodusLoginKeywordPage />;
}
