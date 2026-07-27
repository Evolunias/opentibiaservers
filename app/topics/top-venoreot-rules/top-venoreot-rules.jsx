import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-venoreot-rules');
}

export default function TopVenoreotRulesKeywordPage() {
  return <StaticKeywordPage slug="top-venoreot-rules" />;
}
