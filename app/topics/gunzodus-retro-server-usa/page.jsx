import GunzodusRetroServerUsaKeywordPage, { generateMetadata } from './gunzodus-retro-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusRetroServerUsaKeywordPage />;
}
