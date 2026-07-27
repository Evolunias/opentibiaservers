import CustomMapGunzodusServersKeywordPage, { generateMetadata } from './custom-map-gunzodus-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapGunzodusServersKeywordPage />;
}
