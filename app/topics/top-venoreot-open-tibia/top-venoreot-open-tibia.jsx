import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-venoreot-open-tibia');
}

export default function TopVenoreotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-venoreot-open-tibia" />;
}
