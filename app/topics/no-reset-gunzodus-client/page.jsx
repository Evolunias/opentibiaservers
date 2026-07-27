import NoResetGunzodusClientKeywordPage, { generateMetadata } from './no-reset-gunzodus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetGunzodusClientKeywordPage />;
}
