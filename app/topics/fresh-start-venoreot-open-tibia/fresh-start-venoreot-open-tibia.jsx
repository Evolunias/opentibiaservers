import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-venoreot-open-tibia');
}

export default function FreshStartVenoreotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-venoreot-open-tibia" />;
}
