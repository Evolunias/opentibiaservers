import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-venoreot-tibia');
}

export default function OfficialVenoreotTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-venoreot-tibia" />;
}
