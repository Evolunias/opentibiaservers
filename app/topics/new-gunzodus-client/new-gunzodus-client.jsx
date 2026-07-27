import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-gunzodus-client');
}

export default function NewGunzodusClientKeywordPage() {
  return <StaticKeywordPage slug="new-gunzodus-client" />;
}
