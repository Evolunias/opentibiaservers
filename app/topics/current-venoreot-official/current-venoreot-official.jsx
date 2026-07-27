import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-venoreot-official');
}

export default function CurrentVenoreotOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-venoreot-official" />;
}
