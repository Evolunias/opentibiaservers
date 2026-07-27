import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-gunzodus-client');
}

export default function OfficialGunzodusClientKeywordPage() {
  return <StaticKeywordPage slug="official-gunzodus-client" />;
}
