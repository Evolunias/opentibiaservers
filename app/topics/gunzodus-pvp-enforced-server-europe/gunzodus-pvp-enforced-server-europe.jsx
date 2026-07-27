import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvp-enforced-server-europe');
}

export default function GunzodusPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvp-enforced-server-europe" />;
}
