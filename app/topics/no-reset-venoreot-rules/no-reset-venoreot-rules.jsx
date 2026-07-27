import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-venoreot-rules');
}

export default function NoResetVenoreotRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-venoreot-rules" />;
}
