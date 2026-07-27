import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-venoreot-rules');
}

export default function NewSeasonVenoreotRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-venoreot-rules" />;
}
