import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-argentina-server');
}

export default function GunzodusArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-argentina-server" />;
}
