import GunzodusCanadaServerKeywordPage, { generateMetadata } from './gunzodus-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusCanadaServerKeywordPage />;
}
