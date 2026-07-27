import NoResetGunzodusLoginKeywordPage, { generateMetadata } from './no-reset-gunzodus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetGunzodusLoginKeywordPage />;
}
