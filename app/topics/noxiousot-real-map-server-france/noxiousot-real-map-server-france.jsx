import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-real-map-server-france');
}

export default function NoxiousotRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-real-map-server-france" />;
}
