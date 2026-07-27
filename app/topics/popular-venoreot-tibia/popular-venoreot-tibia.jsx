import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-venoreot-tibia');
}

export default function PopularVenoreotTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-venoreot-tibia" />;
}
