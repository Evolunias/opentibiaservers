import OfficialGunzodusDownloadKeywordPage, { generateMetadata } from './official-gunzodus-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialGunzodusDownloadKeywordPage />;
}
