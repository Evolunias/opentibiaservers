import GunzodusUkServerKeywordPage, { generateMetadata } from './gunzodus-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusUkServerKeywordPage />;
}
