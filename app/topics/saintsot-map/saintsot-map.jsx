import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-map');
}

export default function SaintsotMapKeywordPage() {
  return <StaticKeywordPage slug="saintsot-map" />;
}
