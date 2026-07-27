import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-venoreot-register');
}

export default function NoResetVenoreotRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-venoreot-register" />;
}
