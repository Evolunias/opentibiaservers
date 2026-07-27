import GunzodusEvoServerBrazilKeywordPage, { generateMetadata } from './gunzodus-evo-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusEvoServerBrazilKeywordPage />;
}
