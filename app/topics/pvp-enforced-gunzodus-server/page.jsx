import PvpEnforcedGunzodusServerKeywordPage, { generateMetadata } from './pvp-enforced-gunzodus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedGunzodusServerKeywordPage />;
}
