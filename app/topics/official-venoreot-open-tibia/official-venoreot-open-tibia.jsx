import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-venoreot-open-tibia');
}

export default function OfficialVenoreotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-venoreot-open-tibia" />;
}
