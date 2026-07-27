import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-venoreot-open-tibia');
}

export default function PopularVenoreotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-venoreot-open-tibia" />;
}
