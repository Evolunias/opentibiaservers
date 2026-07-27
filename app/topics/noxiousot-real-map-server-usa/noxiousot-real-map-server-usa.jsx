import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-real-map-server-usa');
}

export default function NoxiousotRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-real-map-server-usa" />;
}
