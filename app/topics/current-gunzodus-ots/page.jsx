import CurrentGunzodusOtsKeywordPage, { generateMetadata } from './current-gunzodus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentGunzodusOtsKeywordPage />;
}
