import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-venoreot-tibia');
}

export default function CurrentVenoreotTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-venoreot-tibia" />;
}
