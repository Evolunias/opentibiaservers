import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-real-map-server-canada');
}

export default function SaintsotRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-real-map-server-canada" />;
}
