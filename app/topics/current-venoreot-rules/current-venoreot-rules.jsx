import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-venoreot-rules');
}

export default function CurrentVenoreotRulesKeywordPage() {
  return <StaticKeywordPage slug="current-venoreot-rules" />;
}
