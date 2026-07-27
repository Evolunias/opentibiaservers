import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-venoreot-ots');
}

export default function OfficialVenoreotOtsKeywordPage() {
  return <StaticKeywordPage slug="official-venoreot-ots" />;
}
