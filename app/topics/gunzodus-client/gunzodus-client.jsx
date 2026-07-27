import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-client');
}

export default function GunzodusClientKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-client" />;
}
