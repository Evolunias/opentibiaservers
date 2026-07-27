import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-cyntara-rules');
}

export default function RealMapCyntaraRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-cyntara-rules" />;
}
