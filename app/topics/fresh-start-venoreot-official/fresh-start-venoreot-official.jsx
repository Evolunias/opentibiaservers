import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-venoreot-official');
}

export default function FreshStartVenoreotOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-venoreot-official" />;
}
