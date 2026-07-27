import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-poland-servers');
}

export default function GunzodusPolandServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-poland-servers" />;
}
