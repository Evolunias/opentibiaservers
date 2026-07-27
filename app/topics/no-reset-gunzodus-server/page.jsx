import NoResetGunzodusServerKeywordPage, { generateMetadata } from './no-reset-gunzodus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetGunzodusServerKeywordPage />;
}
