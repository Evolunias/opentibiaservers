import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-gunzodus-client');
}

export default function ActiveGunzodusClientKeywordPage() {
  return <StaticKeywordPage slug="active-gunzodus-client" />;
}
