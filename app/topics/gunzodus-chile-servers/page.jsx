import GunzodusChileServersKeywordPage, { generateMetadata } from './gunzodus-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusChileServersKeywordPage />;
}
