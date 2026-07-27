import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-argentina-servers');
}

export default function GunzodusArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-argentina-servers" />;
}
