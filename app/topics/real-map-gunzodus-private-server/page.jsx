import RealMapGunzodusPrivateServerKeywordPage, { generateMetadata } from './real-map-gunzodus-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapGunzodusPrivateServerKeywordPage />;
}
