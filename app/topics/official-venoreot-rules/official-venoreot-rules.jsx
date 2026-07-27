import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-venoreot-rules');
}

export default function OfficialVenoreotRulesKeywordPage() {
  return <StaticKeywordPage slug="official-venoreot-rules" />;
}
