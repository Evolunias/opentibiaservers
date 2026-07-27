import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-custom-map-servers-south-america');
}

export default function SaintsotCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-custom-map-servers-south-america" />;
}
