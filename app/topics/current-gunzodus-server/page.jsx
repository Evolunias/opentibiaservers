import CurrentGunzodusServerKeywordPage, { generateMetadata } from './current-gunzodus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentGunzodusServerKeywordPage />;
}
