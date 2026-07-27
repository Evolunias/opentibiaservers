import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-real-map-servers-canada');
}

export default function NoxiousotRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-real-map-servers-canada" />;
}
