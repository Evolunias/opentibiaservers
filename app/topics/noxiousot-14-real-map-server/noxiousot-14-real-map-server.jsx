import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-14-real-map-server');
}

export default function Noxiousot14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-14-real-map-server" />;
}
