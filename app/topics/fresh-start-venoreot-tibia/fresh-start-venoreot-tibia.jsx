import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-venoreot-tibia');
}

export default function FreshStartVenoreotTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-venoreot-tibia" />;
}
