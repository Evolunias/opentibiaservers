import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-venoreot-ot');
}

export default function CustomVenoreotOtKeywordPage() {
  return <StaticKeywordPage slug="custom-venoreot-ot" />;
}
