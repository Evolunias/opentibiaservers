import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-venoreot-official');
}

export default function BestVenoreotOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-venoreot-official" />;
}
