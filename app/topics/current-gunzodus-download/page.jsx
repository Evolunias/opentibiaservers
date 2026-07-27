import CurrentGunzodusDownloadKeywordPage, { generateMetadata } from './current-gunzodus-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentGunzodusDownloadKeywordPage />;
}
