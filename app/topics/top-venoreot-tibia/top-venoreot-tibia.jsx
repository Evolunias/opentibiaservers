import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-venoreot-tibia');
}

export default function TopVenoreotTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-venoreot-tibia" />;
}
