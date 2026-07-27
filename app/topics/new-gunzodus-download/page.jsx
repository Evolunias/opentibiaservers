import NewGunzodusDownloadKeywordPage, { generateMetadata } from './new-gunzodus-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewGunzodusDownloadKeywordPage />;
}
