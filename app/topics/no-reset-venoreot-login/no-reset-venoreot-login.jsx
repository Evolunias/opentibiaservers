import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-venoreot-login');
}

export default function NoResetVenoreotLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-venoreot-login" />;
}
