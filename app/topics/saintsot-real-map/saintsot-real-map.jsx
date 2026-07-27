import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-real-map');
}

export default function SaintsotRealMapKeywordPage() {
  return <StaticKeywordPage slug="saintsot-real-map" />;
}
