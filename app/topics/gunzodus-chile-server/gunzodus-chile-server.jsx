import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-chile-server');
}

export default function GunzodusChileServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-chile-server" />;
}
