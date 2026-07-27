import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-venoreot-open-tibia');
}

export default function CurrentVenoreotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-venoreot-open-tibia" />;
}
