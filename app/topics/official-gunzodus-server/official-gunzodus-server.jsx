import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-gunzodus-server');
}

export default function OfficialGunzodusServerKeywordPage() {
  return <StaticKeywordPage slug="official-gunzodus-server" />;
}
