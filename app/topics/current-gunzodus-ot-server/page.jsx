import CurrentGunzodusOtServerKeywordPage, { generateMetadata } from './current-gunzodus-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentGunzodusOtServerKeywordPage />;
}
