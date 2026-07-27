import NoResetGunzodusKeywordPage, { generateMetadata } from './no-reset-gunzodus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetGunzodusKeywordPage />;
}
