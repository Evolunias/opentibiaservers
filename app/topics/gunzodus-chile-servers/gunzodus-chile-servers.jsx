import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-chile-servers');
}

export default function GunzodusChileServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-chile-servers" />;
}
