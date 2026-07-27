import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-custom-map-server-canada');
}

export default function SaintsotCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-custom-map-server-canada" />;
}
