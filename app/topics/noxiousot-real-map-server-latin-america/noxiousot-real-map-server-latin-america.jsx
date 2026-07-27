import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-real-map-server-latin-america');
}

export default function NoxiousotRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-real-map-server-latin-america" />;
}
