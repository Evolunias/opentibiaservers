import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nilot-rules');
}

export default function RealMapNilotRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-nilot-rules" />;
}
