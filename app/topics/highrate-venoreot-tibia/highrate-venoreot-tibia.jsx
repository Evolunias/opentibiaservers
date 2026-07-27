import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-venoreot-tibia');
}

export default function HighrateVenoreotTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-venoreot-tibia" />;
}
