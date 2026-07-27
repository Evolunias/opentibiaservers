import GunzodusCustomMapServerLatinAmericaKeywordPage, { generateMetadata } from './gunzodus-custom-map-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusCustomMapServerLatinAmericaKeywordPage />;
}
