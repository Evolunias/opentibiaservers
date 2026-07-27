import EvoGunzodusServerKeywordPage, { generateMetadata } from './evo-gunzodus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoGunzodusServerKeywordPage />;
}
