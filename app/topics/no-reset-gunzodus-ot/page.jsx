import NoResetGunzodusOtKeywordPage, { generateMetadata } from './no-reset-gunzodus-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetGunzodusOtKeywordPage />;
}
