import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-real-map-servers-latin-america');
}

export default function SaintsotRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-real-map-servers-latin-america" />;
}
