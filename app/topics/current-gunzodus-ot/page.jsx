import CurrentGunzodusOtKeywordPage, { generateMetadata } from './current-gunzodus-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentGunzodusOtKeywordPage />;
}
