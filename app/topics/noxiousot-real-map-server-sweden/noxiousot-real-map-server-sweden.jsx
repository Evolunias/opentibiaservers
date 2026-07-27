import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-real-map-server-sweden');
}

export default function NoxiousotRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-real-map-server-sweden" />;
}
