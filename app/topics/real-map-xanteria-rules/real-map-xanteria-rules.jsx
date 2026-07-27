import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-xanteria-rules');
}

export default function RealMapXanteriaRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-xanteria-rules" />;
}
