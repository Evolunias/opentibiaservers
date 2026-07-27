import NewSeasonGunzodusDownloadKeywordPage, { generateMetadata } from './new-season-gunzodus-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonGunzodusDownloadKeywordPage />;
}
