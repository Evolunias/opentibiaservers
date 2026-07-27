import GunzodusCustomMapServerNorthAmericaKeywordPage, { generateMetadata } from './gunzodus-custom-map-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusCustomMapServerNorthAmericaKeywordPage />;
}
