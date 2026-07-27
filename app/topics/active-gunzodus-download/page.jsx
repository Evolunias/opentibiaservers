import ActiveGunzodusDownloadKeywordPage, { generateMetadata } from './active-gunzodus-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveGunzodusDownloadKeywordPage />;
}
