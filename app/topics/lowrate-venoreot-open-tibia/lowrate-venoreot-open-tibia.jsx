import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-venoreot-open-tibia');
}

export default function LowrateVenoreotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-venoreot-open-tibia" />;
}
