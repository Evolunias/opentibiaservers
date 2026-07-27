import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-rookgaard-tales-rules');
}

export default function RealMapRookgaardTalesRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-rookgaard-tales-rules" />;
}
