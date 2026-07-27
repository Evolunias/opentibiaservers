import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-custom-map-server-south-america');
}

export default function SaintsotCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-custom-map-server-south-america" />;
}
