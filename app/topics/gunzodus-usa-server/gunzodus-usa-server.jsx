import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-usa-server');
}

export default function GunzodusUsaServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-usa-server" />;
}
