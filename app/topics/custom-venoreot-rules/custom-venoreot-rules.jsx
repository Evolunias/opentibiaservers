import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-venoreot-rules');
}

export default function CustomVenoreotRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-venoreot-rules" />;
}
