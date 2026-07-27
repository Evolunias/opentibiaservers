import PvpeGunzodusServerKeywordPage, { generateMetadata } from './pvpe-gunzodus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeGunzodusServerKeywordPage />;
}
