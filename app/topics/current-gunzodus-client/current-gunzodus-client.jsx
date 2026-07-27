import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-gunzodus-client');
}

export default function CurrentGunzodusClientKeywordPage() {
  return <StaticKeywordPage slug="current-gunzodus-client" />;
}
