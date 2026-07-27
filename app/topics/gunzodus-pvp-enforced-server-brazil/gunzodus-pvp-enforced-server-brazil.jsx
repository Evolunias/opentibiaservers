import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvp-enforced-server-brazil');
}

export default function GunzodusPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvp-enforced-server-brazil" />;
}
