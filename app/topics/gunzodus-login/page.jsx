import GunzodusLoginKeywordPage, { generateMetadata } from './gunzodus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusLoginKeywordPage />;
}
