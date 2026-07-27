import GunzodusRealMapServerLatinAmericaKeywordPage, { generateMetadata } from './gunzodus-real-map-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusRealMapServerLatinAmericaKeywordPage />;
}
