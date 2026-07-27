import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-11-real-map-server');
}

export default function Noxiousot11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-11-real-map-server" />;
}
