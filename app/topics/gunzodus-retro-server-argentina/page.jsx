import GunzodusRetroServerArgentinaKeywordPage, { generateMetadata } from './gunzodus-retro-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusRetroServerArgentinaKeywordPage />;
}
