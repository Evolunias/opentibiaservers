import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-12-real-map-server');
}

export default function Noxiousot12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-12-real-map-server" />;
}
