import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-real-map-servers-south-america');
}

export default function SaintsotRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-real-map-servers-south-america" />;
}
