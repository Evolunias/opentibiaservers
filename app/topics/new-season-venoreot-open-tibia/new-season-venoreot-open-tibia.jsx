import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-venoreot-open-tibia');
}

export default function NewSeasonVenoreotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-venoreot-open-tibia" />;
}
