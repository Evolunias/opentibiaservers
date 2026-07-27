import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-real-map-servers-latin-america');
}

export default function NoxiousotRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-real-map-servers-latin-america" />;
}
