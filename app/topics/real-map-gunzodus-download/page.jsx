import RealMapGunzodusDownloadKeywordPage, { generateMetadata } from './real-map-gunzodus-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapGunzodusDownloadKeywordPage />;
}
