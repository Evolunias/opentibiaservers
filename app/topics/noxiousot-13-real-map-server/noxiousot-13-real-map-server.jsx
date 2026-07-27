import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-13-real-map-server');
}

export default function Noxiousot13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-13-real-map-server" />;
}
