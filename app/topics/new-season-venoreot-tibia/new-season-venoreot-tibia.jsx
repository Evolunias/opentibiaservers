import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-venoreot-tibia');
}

export default function NewSeasonVenoreotTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-venoreot-tibia" />;
}
