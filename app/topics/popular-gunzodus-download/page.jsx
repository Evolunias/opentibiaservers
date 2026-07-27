import PopularGunzodusDownloadKeywordPage, { generateMetadata } from './popular-gunzodus-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularGunzodusDownloadKeywordPage />;
}
