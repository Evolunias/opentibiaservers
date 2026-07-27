import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-gunzodus-private-server');
}

export default function OfficialGunzodusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-gunzodus-private-server" />;
}
