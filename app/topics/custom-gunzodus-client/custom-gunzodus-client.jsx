import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-gunzodus-client');
}

export default function CustomGunzodusClientKeywordPage() {
  return <StaticKeywordPage slug="custom-gunzodus-client" />;
}
