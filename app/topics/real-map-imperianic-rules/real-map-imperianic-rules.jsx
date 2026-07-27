import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-imperianic-rules');
}

export default function RealMapImperianicRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-imperianic-rules" />;
}
