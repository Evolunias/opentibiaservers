import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-germany-servers');
}

export default function GunzodusGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-germany-servers" />;
}
