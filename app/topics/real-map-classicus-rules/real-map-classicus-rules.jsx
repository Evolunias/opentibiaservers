import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classicus-rules');
}

export default function RealMapClassicusRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-classicus-rules" />;
}
