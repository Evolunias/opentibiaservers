import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-gunzodus-client');
}

export default function FreshStartGunzodusClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-gunzodus-client" />;
}
