import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-real-map-server-argentina');
}

export default function NoxiousotRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-real-map-server-argentina" />;
}
