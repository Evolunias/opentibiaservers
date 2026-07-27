import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-gunzodus-server');
}

export default function CurrentGunzodusServerKeywordPage() {
  return <StaticKeywordPage slug="current-gunzodus-server" />;
}
