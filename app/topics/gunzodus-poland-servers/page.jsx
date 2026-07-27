import GunzodusPolandServersKeywordPage, { generateMetadata } from './gunzodus-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusPolandServersKeywordPage />;
}
