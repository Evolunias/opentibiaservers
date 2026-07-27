import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-real-map-server-latin-america');
}

export default function SaintsotRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-real-map-server-latin-america" />;
}
