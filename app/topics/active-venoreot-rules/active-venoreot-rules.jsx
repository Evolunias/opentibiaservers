import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-venoreot-rules');
}

export default function ActiveVenoreotRulesKeywordPage() {
  return <StaticKeywordPage slug="active-venoreot-rules" />;
}
