import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-zezenia-online-rules');
}

export default function RealMapZezeniaOnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-zezenia-online-rules" />;
}
