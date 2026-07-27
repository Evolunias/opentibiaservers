import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvp-enforced-server-uk');
}

export default function GunzodusPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvp-enforced-server-uk" />;
}
