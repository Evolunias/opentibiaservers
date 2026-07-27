import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-gunzodus-private-server');
}

export default function TopGunzodusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-gunzodus-private-server" />;
}
