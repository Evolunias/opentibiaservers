import GunzodusUkServersKeywordPage, { generateMetadata } from './gunzodus-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusUkServersKeywordPage />;
}
