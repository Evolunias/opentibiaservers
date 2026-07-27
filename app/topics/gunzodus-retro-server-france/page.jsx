import GunzodusRetroServerFranceKeywordPage, { generateMetadata } from './gunzodus-retro-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusRetroServerFranceKeywordPage />;
}
