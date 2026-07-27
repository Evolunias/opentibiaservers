import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-venoreot-official');
}

export default function NewSeasonVenoreotOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-venoreot-official" />;
}
