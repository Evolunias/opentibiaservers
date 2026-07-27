import GunzodusEvoServerCanadaKeywordPage, { generateMetadata } from './gunzodus-evo-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusEvoServerCanadaKeywordPage />;
}
