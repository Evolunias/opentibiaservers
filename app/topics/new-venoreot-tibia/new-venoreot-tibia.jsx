import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-venoreot-tibia');
}

export default function NewVenoreotTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-venoreot-tibia" />;
}
