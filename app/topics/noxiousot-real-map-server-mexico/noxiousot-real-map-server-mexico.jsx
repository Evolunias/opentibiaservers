import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-real-map-server-mexico');
}

export default function NoxiousotRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-real-map-server-mexico" />;
}
