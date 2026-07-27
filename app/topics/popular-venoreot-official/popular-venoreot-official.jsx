import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-venoreot-official');
}

export default function PopularVenoreotOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-venoreot-official" />;
}
