import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-venoreot');
}

export default function NoResetVenoreotKeywordPage() {
  return <StaticKeywordPage slug="no-reset-venoreot" />;
}
