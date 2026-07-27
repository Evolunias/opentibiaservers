import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-real-map-servers-mexico');
}

export default function NoxiousotRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-real-map-servers-mexico" />;
}
