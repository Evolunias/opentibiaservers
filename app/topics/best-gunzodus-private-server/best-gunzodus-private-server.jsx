import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-gunzodus-private-server');
}

export default function BestGunzodusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-gunzodus-private-server" />;
}
