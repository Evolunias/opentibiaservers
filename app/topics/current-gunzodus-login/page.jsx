import CurrentGunzodusLoginKeywordPage, { generateMetadata } from './current-gunzodus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentGunzodusLoginKeywordPage />;
}
