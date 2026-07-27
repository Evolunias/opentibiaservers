import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-real-map-servers-usa');
}

export default function NoxiousotRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-real-map-servers-usa" />;
}
