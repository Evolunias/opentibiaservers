import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-venoreot-official');
}

export default function TopVenoreotOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-venoreot-official" />;
}
