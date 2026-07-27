import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-venoreot-ot');
}

export default function OfficialVenoreotOtKeywordPage() {
  return <StaticKeywordPage slug="official-venoreot-ot" />;
}
