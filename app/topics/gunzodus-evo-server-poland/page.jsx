import GunzodusEvoServerPolandKeywordPage, { generateMetadata } from './gunzodus-evo-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusEvoServerPolandKeywordPage />;
}
