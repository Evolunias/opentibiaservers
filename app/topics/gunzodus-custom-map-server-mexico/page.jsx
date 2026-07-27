import GunzodusCustomMapServerMexicoKeywordPage, { generateMetadata } from './gunzodus-custom-map-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusCustomMapServerMexicoKeywordPage />;
}
