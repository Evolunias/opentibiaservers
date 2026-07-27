import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-coxaot-rules');
}

export default function RealMapCoxaotRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-coxaot-rules" />;
}
