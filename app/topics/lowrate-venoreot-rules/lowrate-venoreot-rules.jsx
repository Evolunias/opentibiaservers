import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-venoreot-rules');
}

export default function LowrateVenoreotRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-venoreot-rules" />;
}
