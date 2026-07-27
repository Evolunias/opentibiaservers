import OldSchoolGunzodusDownloadKeywordPage, { generateMetadata } from './old-school-gunzodus-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolGunzodusDownloadKeywordPage />;
}
