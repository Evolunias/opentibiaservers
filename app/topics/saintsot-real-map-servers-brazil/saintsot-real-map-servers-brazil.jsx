import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-real-map-servers-brazil');
}

export default function SaintsotRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="saintsot-real-map-servers-brazil" />;
}
