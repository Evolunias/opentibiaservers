import GunzodusCanadaServersKeywordPage, { generateMetadata } from './gunzodus-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusCanadaServersKeywordPage />;
}
