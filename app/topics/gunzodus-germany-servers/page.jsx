import GunzodusGermanyServersKeywordPage, { generateMetadata } from './gunzodus-germany-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusGermanyServersKeywordPage />;
}
