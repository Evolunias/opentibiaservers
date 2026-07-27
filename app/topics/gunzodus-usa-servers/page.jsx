import GunzodusUsaServersKeywordPage, { generateMetadata } from './gunzodus-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusUsaServersKeywordPage />;
}
