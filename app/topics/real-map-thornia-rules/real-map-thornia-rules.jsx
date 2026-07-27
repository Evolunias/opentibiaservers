import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thornia-rules');
}

export default function RealMapThorniaRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-thornia-rules" />;
}
