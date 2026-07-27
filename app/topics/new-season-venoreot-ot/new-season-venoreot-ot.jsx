import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-venoreot-ot');
}

export default function NewSeasonVenoreotOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-venoreot-ot" />;
}
