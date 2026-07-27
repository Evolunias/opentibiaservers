import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-venoreot-ots');
}

export default function CustomVenoreotOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-venoreot-ots" />;
}
