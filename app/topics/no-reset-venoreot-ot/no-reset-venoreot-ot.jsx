import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-venoreot-ot');
}

export default function NoResetVenoreotOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-venoreot-ot" />;
}
