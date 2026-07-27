import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-venoreot-ots');
}

export default function NewSeasonVenoreotOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-venoreot-ots" />;
}
