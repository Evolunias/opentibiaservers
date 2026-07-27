import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-venoreot-official');
}

export default function NoResetVenoreotOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-venoreot-official" />;
}
