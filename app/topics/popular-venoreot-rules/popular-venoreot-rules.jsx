import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-venoreot-rules');
}

export default function PopularVenoreotRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-venoreot-rules" />;
}
