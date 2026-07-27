import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-real-map-servers-mexico');
}

export default function SaintsotRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="saintsot-real-map-servers-mexico" />;
}
