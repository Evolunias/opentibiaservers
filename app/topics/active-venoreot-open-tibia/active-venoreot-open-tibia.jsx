import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-venoreot-open-tibia');
}

export default function ActiveVenoreotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-venoreot-open-tibia" />;
}
