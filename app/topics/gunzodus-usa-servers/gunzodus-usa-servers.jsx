import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-usa-servers');
}

export default function GunzodusUsaServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-usa-servers" />;
}
