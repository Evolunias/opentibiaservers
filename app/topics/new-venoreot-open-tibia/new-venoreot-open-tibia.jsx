import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-venoreot-open-tibia');
}

export default function NewVenoreotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-venoreot-open-tibia" />;
}
