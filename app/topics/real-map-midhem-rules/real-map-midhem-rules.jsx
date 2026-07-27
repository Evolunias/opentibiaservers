import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-midhem-rules');
}

export default function RealMapMidhemRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-midhem-rules" />;
}
