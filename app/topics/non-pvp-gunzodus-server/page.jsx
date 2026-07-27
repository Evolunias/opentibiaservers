import NonPvpGunzodusServerKeywordPage, { generateMetadata } from './non-pvp-gunzodus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpGunzodusServerKeywordPage />;
}
