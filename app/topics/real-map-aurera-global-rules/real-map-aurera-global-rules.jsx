import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-aurera-global-rules');
}

export default function RealMapAureraGlobalRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-aurera-global-rules" />;
}
