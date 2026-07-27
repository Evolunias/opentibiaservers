import RealMapGunzodusWikiKeywordPage, { generateMetadata } from './real-map-gunzodus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapGunzodusWikiKeywordPage />;
}
