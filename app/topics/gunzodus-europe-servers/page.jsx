import GunzodusEuropeServersKeywordPage, { generateMetadata } from './gunzodus-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusEuropeServersKeywordPage />;
}
