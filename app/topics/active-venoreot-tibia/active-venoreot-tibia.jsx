import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-venoreot-tibia');
}

export default function ActiveVenoreotTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-venoreot-tibia" />;
}
