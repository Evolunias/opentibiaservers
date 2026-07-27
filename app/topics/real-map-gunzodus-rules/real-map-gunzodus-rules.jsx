import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-gunzodus-rules');
}

export default function RealMapGunzodusRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-gunzodus-rules" />;
}
