import GunzodusRetroServerUkKeywordPage, { generateMetadata } from './gunzodus-retro-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusRetroServerUkKeywordPage />;
}
