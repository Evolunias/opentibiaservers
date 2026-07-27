import CustomMapGunzodusServerKeywordPage, { generateMetadata } from './custom-map-gunzodus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapGunzodusServerKeywordPage />;
}
