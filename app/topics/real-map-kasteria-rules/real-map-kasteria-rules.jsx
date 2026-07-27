import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-kasteria-rules');
}

export default function RealMapKasteriaRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-kasteria-rules" />;
}
