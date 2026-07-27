import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-venoreot-ots');
}

export default function ActiveVenoreotOtsKeywordPage() {
  return <StaticKeywordPage slug="active-venoreot-ots" />;
}
