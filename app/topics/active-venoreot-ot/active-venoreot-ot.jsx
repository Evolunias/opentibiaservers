import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-venoreot-ot');
}

export default function ActiveVenoreotOtKeywordPage() {
  return <StaticKeywordPage slug="active-venoreot-ot" />;
}
