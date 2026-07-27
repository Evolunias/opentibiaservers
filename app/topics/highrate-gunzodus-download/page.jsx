import HighrateGunzodusDownloadKeywordPage, { generateMetadata } from './highrate-gunzodus-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateGunzodusDownloadKeywordPage />;
}
