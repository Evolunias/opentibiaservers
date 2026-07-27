import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-server');
}

export default function GunzodusServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-server" />;
}
