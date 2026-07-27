import CustomGunzodusDownloadKeywordPage, { generateMetadata } from './custom-gunzodus-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomGunzodusDownloadKeywordPage />;
}
