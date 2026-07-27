import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-venoreot-official');
}

export default function ActiveVenoreotOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-venoreot-official" />;
}
