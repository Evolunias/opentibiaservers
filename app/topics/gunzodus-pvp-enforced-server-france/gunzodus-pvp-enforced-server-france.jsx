import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvp-enforced-server-france');
}

export default function GunzodusPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvp-enforced-server-france" />;
}
