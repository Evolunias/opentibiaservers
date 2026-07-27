import CurrentGunzodusClientKeywordPage, { generateMetadata } from './current-gunzodus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentGunzodusClientKeywordPage />;
}
