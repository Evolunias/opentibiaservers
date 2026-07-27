import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-venoreot');
}

export default function NewSeasonVenoreotKeywordPage() {
  return <StaticKeywordPage slug="new-season-venoreot" />;
}
