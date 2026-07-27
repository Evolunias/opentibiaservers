import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-venoreot-official');
}

export default function CustomVenoreotOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-venoreot-official" />;
}
