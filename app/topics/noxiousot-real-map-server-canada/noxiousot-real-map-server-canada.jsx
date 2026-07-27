import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-real-map-server-canada');
}

export default function NoxiousotRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-real-map-server-canada" />;
}
