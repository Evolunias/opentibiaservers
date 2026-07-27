import EvoGunzodusServersKeywordPage, { generateMetadata } from './evo-gunzodus-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoGunzodusServersKeywordPage />;
}
