import CurrentGunzodusWebsiteKeywordPage, { generateMetadata } from './current-gunzodus-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentGunzodusWebsiteKeywordPage />;
}
