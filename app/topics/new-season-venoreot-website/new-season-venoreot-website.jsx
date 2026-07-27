import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-venoreot-website');
}

export default function NewSeasonVenoreotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-venoreot-website" />;
}
