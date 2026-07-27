import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-venoreot-official');
}

export default function OfficialVenoreotOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-venoreot-official" />;
}
