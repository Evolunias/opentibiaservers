import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nostalther-rules');
}

export default function RealMapNostaltherRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-nostalther-rules" />;
}
